//import Players from './map'
//import User from './component'
//import Person from './conditionals'
import AddToCart from './state'
import Students from './loadDataFromOutside'
import { Suspense } from 'react'
import Todos from './useEffect'
import './App.css'
function App() {

  const studentsDataPromise =async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
  }
//const occupations =['Teacher','Buisenessman','Salseman','Police']

const handleClick=(id)=>{
  alert('Click Me ' + id) //will show after clicking on button
}

  return (
    <div >
       <Todos></Todos>
      <button onClick={()=> handleClick(45)}>Click here</button>
      <AddToCart></AddToCart>
      <Suspense fallback={<p>Loading...</p>}>
            <Students studentsData ={studentsDataPromise()}></Students>
      </Suspense>
     
      
      


      {/* {
        occupations.map(occupation => <User name ={occupation}></User>)
      }
      <Person name='Kamini' isActive={true}></Person>
      <Person name='Jamini' isActive={false}></Person>
      <Person name='Lamini' isActive={true}></Person>
      <Players></Players> */}

    </div>
  )
}

export default App
