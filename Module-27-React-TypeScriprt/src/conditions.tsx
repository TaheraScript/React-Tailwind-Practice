interface TaskPropType{
    name : string,
    isDone : boolean
}

export default function Task({name,isDone}:TaskPropType) {
     let list;
     if(isDone){
        list = <li>done : {name}</li>
     }
     else {
        list = <li>not done : {name}</li>
     }
     return list
    }

//Using ternary operator only for one statement,if the condition is false than output will be return

// export default function Task({name,isDone}:TaskPropType) {
//      return isDone == true || <h2>{name} pending </h2> 
//     }

//Using ternary operator only for one statement,if the condition is true than output will be return

// export default function Task({name,isDone}:TaskPropType) {
//      return isDone == false && <h2>{name} pending </h2> 
//     }

// Using ternary operator only for one statement,if the condition is true than output will be return

// export default function Task({name,isDone}:TaskPropType) {
//      return isDone == true && <h2>{name} Completed </h2> 
//     }

//using ternary operator

// export default function Task({name,isDone}:TaskPropType) {
//      return isDone == true? <h2>{name} Completed </h2> : <h2>{name} is pending</h2>
//     }
    
//using if else

// export default function Task({name,isDone}:TaskPropType) {
//     if(isDone == true){
//          return <h2>{name} Completed </h2>
//     }
//     else {
//         return <h2>{name} is pending</h2>
//         }
// }

/* using if */

// export default function Task({name,isDone}:TaskPropType) {
//     if(isDone == true){
//          return <h2>{name} Completed </h2>
//     }
//  return <h2>{name} is pending</h2>
// }