import { useState } from "react"
import { Suspense } from "react"
import Navbar from "./component/Navbar"
import Banner from "./component/Banner"
import Players from "./component/players/Players"
import type { PlayerType } from "./type/PlayerType"

const playersFetch = async() :Promise<PlayerType[]>=>{
    const res = await fetch('/data.json')
    const data = await res.json()
    return data;
  }
function App() {
const [playersPromise] = useState(()=> playersFetch())
  const [coin,setCoin] =useState(500)
  console.log(playersPromise)

  return (
  
    <>
      <Navbar coin={coin}/>
       <Banner/>
       <Suspense fallback={<p>Loading...</p>}>
        <Players coin={coin} setCoin ={setCoin} playersPromise ={playersPromise}/>
       </Suspense>
    </>
  )
}

export default App
