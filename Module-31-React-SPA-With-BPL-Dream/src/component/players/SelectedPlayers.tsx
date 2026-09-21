import type { Dispatch,SetStateAction } from "react";
import type { PlayerType } from "../../type/PlayerType";
import SelectedPlayerCard from "./SelectedPlayerCard";


interface ISelectedPlayersProps{
    selectedPlayers:PlayerType[],
 setSelectedPlayers:Dispatch<SetStateAction<PlayerType[]>>,
  coin :number,
    setCoin : Dispatch<SetStateAction<number>>
}
const SelectedPlayers = ({selectedPlayers,setSelectedPlayers,coin,setCoin}:ISelectedPlayersProps) => {
    if(selectedPlayers.length === 0){
        return <h2 className="font-bold text-3xl my-10 text-center text-red-500">No Selected Player</h2>
    }
    
    return (
        <div className="grid grid-cols-1 gap-7 mt-6">
            { selectedPlayers.map((player : PlayerType,index:number)=>{
                    return (
                   <SelectedPlayerCard key={index}player = {player} coin={coin} setCoin ={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></SelectedPlayerCard>
                    )
                })}
                </div>
                );
                };

         
export default SelectedPlayers;
