import UserCard from "./map-Users-UserCard"

interface User{
    name : string,
    isLoggedIn : boolean
}
const users : User[]= [
    {name:'Rabiul',isLoggedIn : true},
    {name:'Babul',isLoggedIn : false},
    {name:'Asraf',isLoggedIn : true},
    {name:'Masrafi',isLoggedIn :false}
]
export default function Users(){
    return (
        <div>
            {
                users.map(user=> <UserCard name={user.name}></UserCard>)
        }
        </div>
    )
}

//using map

// export default function Users(){
//     return (
//         <div>
//             {
//                 users.map(user=> <li>{user.name}</li>)
//         }
//         </div>
//     )
// }