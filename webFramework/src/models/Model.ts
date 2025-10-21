import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T>{
    set(value: T):void;
    getAll():T;
    get <K extends keyof T>(key :K):T[K]
}
interface Sync<T>{
    fetch(id:number):AxiosPromise;
    save(data: T):AxiosPromise;

}
interface Events{
    on(eventName:string,callback:()=>void):void;
    trigger(eventName: string): void;
}

interface HasId{
    id?:number;
}

export class Model<T extends HasId>{

    constructor(
        private attributes: ModelAttributes<T>,
        private events :Events,
        private sync : Sync<T>,
    ){}

    //get keyword (getters and setter )this will return on method from eventing. ref and then can be called without paranthsis..
    
    //mind this errror if we use technque below when converted js to these assignment opeartion would execute before constructor initialization
    //this wouldn't effect our case becos we are using interface rather than class instantiation.
    on = this.events.on;
    trigger = this.events.trigger;
    get = this.attributes.get;   

    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.attributes.get('id');

        if (typeof id !== 'number') throw new Error("Id not found");

        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set((response.data))
        })
    }

    save():void{
        this.sync.save(this.attributes.getAll())
        .then((response:AxiosResponse):void =>{
            this.trigger('save');
        })
        .catch(()=>{
            this.trigger('error');
        })
    }
}