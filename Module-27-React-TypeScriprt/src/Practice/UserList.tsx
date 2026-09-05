//task-9

import UserCard from "./UserCard"
import type { User } from "./UserType"

const students:User[] =[
    {id : 12,name : 'Chamili',grade : 45 ,isActive :false},
    {id : 42,name : 'Kamili',grade : 80,isActive :true},
    {id : 14,name : 'Emili',grade : 35,isActive :false}
]
export default function UserList(){
    return (
         <div>
            <h2>User List</h2>
        {
            students.map((student )=><UserCard  id={student.id} name ={student.name}  grade ={student.grade} isActive={student.isActive} ></UserCard>)

        } 
         </div>
    )
}