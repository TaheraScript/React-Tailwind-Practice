// import Batter from './State-Batter'
//import Users from './Users-fetch-await-async'
// import { Suspense } from 'react'
 import Todos from './useEffect-Todos'
import './App.css'

// const usersDataPromise =async()=>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data =await res.json();
//   return data;
// }

function App() {

  //Event

  // const handleClick=()=>{
  //   alert('button clicked')
  // }
  // const handleAddCart=(id)=>{
  //   alert('buying item ' +id)
  // }

  return (
    <>
    <Todos></Todos>
    {/* <Suspense fallback=></Suspense> */}
    {/* <Suspense fallback={<p>Loading...</p>}>
      <Users usersDataPromise={usersDataPromise()}></Users>
    </Suspense> */}
    
      {/* State */}
    {/* <Batter></Batter> */}

      {/* Event */}
      {/* <button onClick={handleClick}>Click Me2</button>
      <button onClick={()=> alert('click 3')}>Click Me3</button>
      <button onClick={()=> handleAddCart(78)}>Buy This</button> */}
    </>
  )
}

export default App
