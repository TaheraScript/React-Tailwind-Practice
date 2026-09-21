
import type { Dispatch, SetStateAction } from 'react';
import type { PlayerType } from '../../type/PlayerType';
import { TbTrash } from 'react-icons/tb';
interface ISelectedPlayerCardProps{
    player : PlayerType,
     selectedPlayers:PlayerType[],
     setSelectedPlayers:Dispatch<SetStateAction<PlayerType[]>>,
     coin :number,
    setCoin : Dispatch<SetStateAction<number>>
}
const SelectedPlayerCard = ({player,selectedPlayers,setSelectedPlayers,coin,setCoin} : ISelectedPlayerCardProps) => {
    const handleRemovePlayer = (player :PlayerType)=>{
const restPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)
setSelectedPlayers(restPlayers)
const newCoinPrice = coin + player.price
setCoin(newCoinPrice)
    }
    return (
         <div className="flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl py-2 px-4">
                        <div className="flex gap-2">
                            <img src={player.playerImage} alt='' className="h-[60px] w-[50-px]"/>
                        <div>
                      
                            <h2 className="font-bold text-2xl">{player.playerName}</h2>
                            <p>{player.battingStyle}</p>
                        </div>
                    </div>
                    <span className="text-red-500 font-bold cursor-pointer" onClick ={()=>handleRemovePlayer(player)}>
                    <TbTrash/>
                    </span>
                    </div>
    );
};

export default SelectedPlayerCard;