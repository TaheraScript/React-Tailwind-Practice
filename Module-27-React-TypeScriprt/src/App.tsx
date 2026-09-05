//import Todo from './props-Todo'
//import Task from './conditions-Task'
//import Book from './map-Book'
//import Users from './map-Users'
//import Sports from './map-Sports'
//------Practice----
import WelcomeCard from './Practice/WelcomeCard'
//import Footer from './Practice/Footer'
import ProfileCard from './Practice/ProfileCard'
import ProductCard from './Practice/ProductCard'
import Cart from './Practice/Cart'
import UserGreeting from './Practice/UserGreeting'
import StudentList from './Practice/StudentList'
import UserList from './Practice/UserList'


import './App.css'


function App() {

 
  //map
  //const books =['Bangla','English','Physics','Chemistry']
  //books.map(book =>)
  return (
    <>
    {/* ---Practice--- */}
    <WelcomeCard></WelcomeCard>
    {/* <Footer></Footer> */}
    <ProfileCard></ProfileCard>
    <ProductCard productName ="Shoe" price ={450} inStock ={true}></ProductCard>
    <ProductCard productName ="Dress" price ={500} inStock ={false}></ProductCard>
    <ProductCard productName ="Pant" price ={400} inStock ={true}></ProductCard>
    <Cart itemCount ={34}></Cart>
    <Cart itemCount ={0}></Cart>
    <UserGreeting userName = 'Habil'></UserGreeting>
    <UserGreeting userName = ''></UserGreeting>
    <UserGreeting userName = 'Kabil'></UserGreeting>
    <StudentList></StudentList>
    <UserList></UserList>





      {/* map */}
      {/* <Sports></Sports> */}
      {/* <h1>Get Started</h1>
      <Users></Users> */}
      {/* {
      books.map(book => <Book name ={book}></Book>)
      } */}


      {/* <Task name='todays module is' isDone={false}></Task>
      <Task name='todays practice is' isDone={true}></Task> */}
      
      {/* <Todo task='learning about props' time ='4.00'></Todo>
      <Todo task='learning about import Component' time ='6.00'></Todo>
      <Todo task='learning about export Component' time ='8.00'></Todo> */}
      {/* <Person name = 'Bokul' age ="27"></Person>
      <Person name ='Akbar' age ='45'></Person>
      <Person name = 'Chowdhury' age ='35'></Person> */}
    </>
  )
}


// function Person(props){
//   console.log('the output of props is',props )
//   console.log(props.name,props.age)

//   return (
//   <div style = {{
//   border : '2px solid rgb(184, 152, 142)',
//   margin : '5px'
// }}> 
//   <p> I am a student,my name is {props.name}</p>
//   <p>who wants to learn React</p>
//   <p>and also Next.js at the age of {props.age}</p>
//   </div>
//   )
// }

export default App
