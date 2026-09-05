//task-8
import type { Student } from "./StudentType"
const students:Student[] =[
    {id : 12,name : 'Chamili',grade : 45},
    {id : 42,name : 'Kamili',grade : 80},
    {id : 14,name : 'Emili',grade : 35}
]
export default function StudentList(){
    return (
         <ul>
        {
            students.map((student )=><li key ={student.id}>{student.name} obtained {student.grade} {student.grade >=40 ? 'Pass' : 'Fail'}
        </li>)

        } 
         </ul>
    )
}