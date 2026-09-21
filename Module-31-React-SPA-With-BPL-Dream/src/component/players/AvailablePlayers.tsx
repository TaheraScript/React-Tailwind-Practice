
import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../type/PlayerType";
import PlayerCard from "./PlayerCard";

interface IAvailablePlayerProp {
    players: PlayerType[],
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>,
    selectedPlayers: PlayerType[],                                 setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>  
}

const AvailablePlayers = ({ players,coin,setCoin,selectedPlayers,setSelectedPlayers} :IAvailablePlayerProp) => {
  return (
    <div className="grid grid-cols-3 gap-7 mt-4">
      {players.map((player : PlayerType ,index:number) => {
        return (
          <PlayerCard key={index} player={player} coin={coin} setCoin={setCoin}  selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
