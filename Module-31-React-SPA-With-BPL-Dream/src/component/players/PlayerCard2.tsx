import type { PlayerType } from '../../type/PlayerType';
import { HiUser, HiOutlineGlobeAlt } from 'react-icons/hi';
import { GiCricketBat } from 'react-icons/gi';

const PlayerCard = ({ player }: { player: PlayerType }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(player.price);

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 border border-base-200 overflow-hidden">
      <figure className="relative h-56 overflow-hidden">
        <img
          src={player.playerImage}
          alt={`Photo of ${player.playerName}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 right-3 badge badge-primary badge-lg font-semibold shadow">
          {player.playerType}
        </span>
      </figure>

      <div className="card-body space-y-4 p-5">
        <div>
          <h2 className="card-title text-xl gap-2">
            <HiUser className="text-primary" />
            {player.playerName}
          </h2>
          <p className="flex items-center gap-1 text-sm text-base-content/60 mt-1">
            <HiOutlineGlobeAlt />
            {player.origin}
          </p>
        </div>

        <div className="divider my-0" />

        <div>
          <h3 className="flex items-center gap-2 font-bold text-base mb-2">
            <GiCricketBat className="text-secondary" />
            Playing Style
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-outline badge-lg">{player.battingStyle}</span>
            <span className="badge badge-outline badge-lg">{player.bowlingStyle}</span>
          </div>
        </div>

        <div className="card-actions items-center justify-between pt-2">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {formattedPrice}
          </span>
          <button className="btn btn-primary btn-sm sm:btn-md">
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;