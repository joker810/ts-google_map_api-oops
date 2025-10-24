
@classDecorator
class Dec{
    @testDecorator
    color:string='red';

    @testDecorator
    get formattedColor():string{
        return `this boats color is ${this.color}`;
    }

    @logError('Oops error was found')
    pilot(@parameterDecorator speed: string,
        @parameterDecorator generateWake: boolean
    ):void {
        if(speed==="fast"){
            console.log('swish');
        }else{
            console.log('nothing');
            
        }
    }
}

function classDecorator(constructor : typeof Dec){
console.log(constructor);

}

function parameterDecorator(target:any, key:string ,index:number){
    console.log(key, index);
    
}

function testDecorator(target:any , key:string){
    console.log(key);
    
}

function logError(str:string){
    return function (target:any,key:string,desc: PropertyDecorator):void{
    const method= desc.value;

    desc.value=function(){
        try{
            method()
        }
        catch(e){
            console.log(str);
            
        }
    }
}
}

new Dec().pilot()