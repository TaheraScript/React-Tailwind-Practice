//import Todo from './props'
//import Task from './conditions'
//import Book from './map'
import './App.css'
import Users from './map-object'

function App() {
  //const books =['Bangla','English','Physics','Chemistry']
  //books.map(book =>)
  return (
    <>
      <h1>Get Started</h1>
      <Users></Users>
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
