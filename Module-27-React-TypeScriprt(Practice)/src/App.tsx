import Players from './map'
import User from './component'
import Person from './conditionals'
import './App.css'
function App() {
const occupations =['Teacher','Buisenessman','Salseman','Police']
// const country ='China'  

  return (
    <div >
      {
        occupations.map(occupation => <User name ={occupation}></User>)
      }
      <Person name='Kamini' isActive={true}></Person>
      <Person name='Jamini' isActive={false}></Person>
      <Person name='Lamini' isActive={true}></Person>
      <Players></Players>

    </div>
  )
}

export default App
