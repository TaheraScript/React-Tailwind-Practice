import PlayersCard from "./UserCard"

export default function Players(){
    const players =['Kabir','Jakir','Bakkar']
    return(
        <div>
            {
                players.map(player => <PlayersCard name ={player}></PlayersCard>)
            }
        </div>
    )
}