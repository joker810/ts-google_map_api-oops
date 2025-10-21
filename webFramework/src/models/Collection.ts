import axios ,{AxiosPromise, AxiosResponse} from "axios";
import { Eventing } from "./Eventing";


export class Collection<T,K>{

    models: T[] = []; 
    events: Eventing =  new Eventing();

    constructor(
        public rootUrl : string,
        public deserialize : (json:K)=>T     
        ){}

    //here we are using getting (rather than direct init (ref model.ts 24,35,36)) becos field variable will initialised after getter and setter which is undefined ...
    get on(){
        return this.events.on;
    }

    get trigger(){
        return this.events.trigger;
    }

    fetch():void {
        axios.get(this.rootUrl)
        .then((response:AxiosResponse) => {
            response.data.forEach((value:K):void =>{
                
                this.models.push(this.deserialize(value))
            })

            this.trigger('change');
        })
    }
}