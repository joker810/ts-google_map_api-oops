import {Child, ChildAsFc} from './Child';


const Parent=()=>{
    return <>
    <Child color="red" onClick={()=>console.log('hi')
    }/>
    {/* <ChildAsFc color="blue"/>     */}
    </>
}

export default Parent;