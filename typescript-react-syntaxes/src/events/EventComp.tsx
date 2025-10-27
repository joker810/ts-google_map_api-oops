const EventComponent=()=>{
    
    //ctrl  + click or hover for more events and HTML elements
    function onChange(event:React.ChangeEvent<HTMLInputElement>){
        console.log(event); 
    }
    return <div>
        <input type="text" onChange={onChange}/>
    </div>
}

export default EventComponent;