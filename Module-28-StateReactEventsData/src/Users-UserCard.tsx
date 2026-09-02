import './Users-UserCard.css'
export default function UserCard({user}){
    return(
        <div className='user'>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p><small>Phone:{user.phone}</small></p>
        </div>
    )
}