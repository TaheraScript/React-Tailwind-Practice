import {useState} from "react"
export default function Batter(){
    const[runs,setRuns] = useState(0);

    const handleAddOne=()=>{
        setRuns(runs + 1)
        }
    const handleAddFour=()=>{
        setRuns(runs + 4)
        }
    const handleAddSix=()=>{
        setRuns(runs + 6)
        }
    return(

        <div>
            <h2>Cricket Score Board</h2>
            <h2>Score :{runs} </h2>
            <button onClick={handleAddOne}>Add 1</button>
            <button onClick ={handleAddFour}>Add 4</button>
            <button onClick={handleAddSix}>Add 6</button>

        </div>
    )
}