// interface Typ{get():string | number}

class Gen<T> {
    constructor(public collection:T[]){}
    
    get (index:number):T | undefined{
        if(index<0 || index>this.collection.length ){
            throw new Error('out of bounds')
        }
        return this.collection[index];
    }
}

const str= new Gen<string>(["a","b","c"]);
console.log(str.get(2))

function printAnything<T>(arr:T[]):void{ 
    for(let char of arr){
        console.log(char)
    }
}

printAnything<string>(['a','b','c']);


