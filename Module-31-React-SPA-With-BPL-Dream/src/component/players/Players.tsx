import type{ PlayerType } from '../../type/PlayerType';
import {use, useState,type Dispatch, type SetStateAction} from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

interface PlayersPropType{
    playersPromise :Promise<PlayerType[]>,
    coin :number,
    setCoin : Dispatch<SetStateAction<number>>,
    selectedPlayers: PlayerType[],                              
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>> 
}
const Players = ({playersPromise,coin,setCoin} : PlayersPropType) => {
  
    const players = use(playersPromise);
    const[buttonType,setButtonType] =useState<'available' | 'selected'>('available');
    const[selectedPlayers,setSelectedPlayers] = useState<PlayerType[]>([])
    const handleButton =(type :'available'|'selected')=>{
        setButtonType(type)
    
    }
  console.log(players);

    return (
        <div className='container mx-auto'>
            <div className='flex justify-between gap-4 mb-2'>
                <h2 className='font-bold text-2xl'>{buttonType === 'available'? 'Available Players' : 'Selected Players'}</h2>
                <div>
                    <button onClick={()=>handleButton('available')}className={`btn ${buttonType === 'available' ? 'btn-success' : ""} rounded-r-none`}>Available</button>
                    <button onClick={()=>handleButton('selected')}className={`btn ${buttonType === 'selected' ? 'btn-success' : ""} rounded-r-none`}>Selected</button>
                </div>
                
            </div>
            {buttonType === 'available'? <AvailablePlayers coin={coin} setCoin={setCoin} players ={players} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} ></AvailablePlayers> : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayers>}
        </div>
    );
};

export default Players;