
import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface Userprops {
    id?: number;
    name?: string;
    age?: number
}

const rootUrl = `http://localhost:3000/users`;

export class User extends Model<Userprops> {
   static buildUser(attrs : Userprops):User{
    return new User(
        new Attributes<Userprops>(attrs),
        new Eventing(),
        new ApiSync<Userprops>(rootUrl)
    )
   }

   static buildUserCollection(): Collection<User, Userprops>{
   return new Collection<User ,Userprops>('http://localhost:3000/users',
    (json :Userprops)=>User.buildUser(json))
}

    setRandomAge():void{
        const age = Math.round(Math.random()*100);
        this.set({age});
    }  

    
}
