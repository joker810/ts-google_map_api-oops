interface ChildProps{
    color:string;
    onClick:()=>void;
    children?:string;
}
//react better approach if you want children define yourself to avoid confusion..
export const Child=({color, onClick}:ChildProps)=>{
    return <div>{color}
    <button onClick={onClick}> Click me</button>
    </div>
}

//tried to use children without type in childProps didntwork . earlier it was working we could have include the children in FC without type children defined.. 
export const ChildAsFc: React.FC<ChildProps>=({color,onClick,children})=>{
    return <div>{color}
    <button onClick={onClick}> Click me</button>
    {children}
    </div>
}