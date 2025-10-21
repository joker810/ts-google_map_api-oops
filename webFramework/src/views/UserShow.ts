import { View } from "./view";
import { User, Userprops } from "../models/Users";

export class UserShow extends View<User,Userprops>{

    template(): string {
        return `
        <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div> 
        </div>      
        `
    }
}