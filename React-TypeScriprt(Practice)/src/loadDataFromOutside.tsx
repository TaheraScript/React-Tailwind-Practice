import { use } from "react"
import StudentsCard from "./StudentsCard";

export default function Students({studentsData}){
    const studentsInfo = use(studentsData);
    return(
        <div>
            <p>Total Student : {studentsInfo.length}</p>
           {
                studentsInfo.map(student =><StudentsCard student = {student}></StudentsCard>)
           }
        </div>
    )
}