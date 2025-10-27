import { useState } from "react";

// interface Guests{
//     guest:string; 
// }
 
const GuestList=()=>{

    const [name ,setName]=useState('')
    const [guests,setGuests]= useState<string[]>([]);

    const onClick=()=>{
        setName('');
        setGuests(prev=>[...prev,name])
    }

    return <div>
        <h1>Guest list</h1>
        <ul>
            {guests.map(g=><li>{g}</li>)}
        </ul>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <button onClick={onClick}>Add guest</button>
    </div>
}

export default GuestList;