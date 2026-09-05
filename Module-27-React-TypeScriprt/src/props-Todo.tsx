interface TodoPropsType {
    task : string,
    time : number
}
export default function Todo({task,time} : TodoPropsType){
    
    return <li>hi,i'm new here to {task} at {time}pm </li>
}
//export default Todo;

