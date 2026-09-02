import {use} from 'react';
import UserCard from './Users-UserCard';
function Users({usersDataPromise}){

    const users = use(usersDataPromise);
    console.log(users);
    return(
        <div>
            <h2>Users: {users.length}</h2>
            {
                users.map(user => <UserCard user={user}></UserCard>)
            }

        </div>
    )
}

export default Users;




//fetch
//callback 
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => {concole.log})

//async await (normal function)

// async function loadData (){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     return data
// }

//async await (arrow function)
// const loadData =async() =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     return data;
// }