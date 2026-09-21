
import  { useState, type Dispatch, type SetStateAction } from 'react';
import type { PlayerType } from '../../type/PlayerType';
import { HiUser } from 'react-icons/hi';
import { Bounce, toast } from 'react-toastify';


interface IPlayerCardProp{
   player : PlayerType,
    coin :number,
    setCoin : Dispatch<SetStateAction<number>>,
    selectedPlayers:PlayerType[],
 setSelectedPlayers:Dispatch<SetStateAction<PlayerType[]>>
}
const PlayerCard = ({player,coin,setCoin,selectedPlayers,setSelectedPlayers}:IPlayerCardProp) => {

  const[isSelected,setIsSelected] = useState(false)
  const  handlePlayerCard =()=>{
  setIsSelected(true)
  const newCoinPrice = coin -player.price;
  if(newCoinPrice >=0){
    setCoin(newCoinPrice)
    toast.success(`${player.playerName} is purchased successfully`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
});
  }
  else{
    toast.warn('Coin is not enough to purchase', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
  }
  //selected players logic
  setSelectedPlayers([...selectedPlayers,player])
}
    return (
       <div className="card bg-base-100  shadow-sm">
            <figure>
              <img
                src={player.playerImage}
                alt="Image of a cricket player"
              />
            </figure>
            <div className="card-body space-y-3">
                
              <h2 className="card-title"><HiUser/>{player.playerName}</h2>
              <div className="flex justify-between gap-4">
                <p className="font-semibold">{player.origin}</p>
                <button className="btn">{player.playerType}</button>
              </div>
              <div className="divider"/>
              <h2 className="font-bold text-2xl">Rating</h2>
              <div className="flex justify-between gap-4">
                <p className="font-semibold">{player.battingStyle}</p>
              <button className="btn">{player.bowlingStyle}</button>
              </div>
              <div className=" card-actions flex justify-between gap-4">
                <h2 className="font-bold text-xl">${player.price}</h2>
                <button onClick ={()=>handlePlayerCard()} className="btn" disabled ={isSelected ? true : false}>{isSelected === true ? "Selected" : "ChoosePlayer"}</button>
              </div>
              
              
            </div>
          </div>
    );
};

export default PlayerCard;