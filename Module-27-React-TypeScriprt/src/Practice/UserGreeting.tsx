//task-7
export default function UserGreeting({userName} : {userName ?: string}){
    return userName.length != 0 || <p> 'Guest' </p>
}