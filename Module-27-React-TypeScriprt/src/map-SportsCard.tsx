import type { SportsType } from "./Sports-datatype";

export default function SportsCard({sport}:{sport:SportsType}){
    return(
        <div className="sports">
            <h2>Name:{sport.name}</h2>
            <p>Players:{sport.players}</p>
        </div>
    )
}