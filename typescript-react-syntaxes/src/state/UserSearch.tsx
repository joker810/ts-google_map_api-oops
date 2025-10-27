import { useState, useRef ,useEffect } from "react";

const users=[
    {name:'sarah',age:20},
    {name:'jake',age:21},
    {name:'siri',age:22},
    {name:'neem',age:22},
]

const UserSearch:React.FC=()=>{

    const[name,setName]=useState('')
    const [search,setSearch]=useState<{name:string;age:number} | undefined>();

    useEffect(()=>{
        if(!inputRef.current)return;
        inputRef.current.focus();
    },[])

    const inputRef=useRef<HTMLInputElement| null>(null)

    function onClick(){
        const newValue=users.find(li=>li.name===name)
        if(newValue)setSearch(newValue);
        
    }
    return <div>
        User search
        <input ref={inputRef} onChange={(e)=>setName(e.target.value)} value={name}/>
        <button onClick={onClick}>Find</button>
        {search && <p>{search.name} : {search.age}</p>}
    </div>
}

export default UserSearch;