//import type { UserType } from "./datatype";


export default function User({name}){
    return (
        <div className="student" style ={{
   margin : '3px',
  borderRadius:'5px'
}}>
            <p>{name}</p>
           
            
        </div>
    )
}