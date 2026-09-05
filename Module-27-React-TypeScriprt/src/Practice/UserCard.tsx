import type { User } from "./UserType";

export default function UserCard(props:User){
    return (
        <div>
             {props.name} is {props.isActive? 'Active' : 'InActive'}
        </div>
    )

}