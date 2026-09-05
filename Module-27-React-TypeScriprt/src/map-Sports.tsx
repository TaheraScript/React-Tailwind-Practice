import SportsCard from "./map-SportsCard";
import type { SportsType } from "./Sports-datatype";
 
  
const sports: SportsType[] =[
    {name:'Football',players: 11},
    {name:'Kabadi',players: 19},
    {name:'chess',players: 10}
]

export default function Sports(){
    return (
        <div>
            {
                sports.map(sport => <SportsCard sport={sport}></SportsCard>)
            }
        </div>
    )
}