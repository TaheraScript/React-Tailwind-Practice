import './student.css'
export default function StudentsCard({student}){
    return (
        <div className="students">
            <p>Students Name : {student.name}</p>
            <p>Students email : {student.email}</p>
            <p><small>Students Phone : {student.phone}</small></p>
        </div>
    )
}