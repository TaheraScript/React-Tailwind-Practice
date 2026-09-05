//task-3 (2,3,4)
export default function ProfileCard(){
    const name:string = 'Layla';
    const age:number = 23;
    const favouriteHobby:string ='Coding';
    const year = new Date().getFullYear();
    return (
        <div>
            <h2>I am {name}.</h2>
            <p>I am {age}.</p>
            <p>I love to {favouriteHobby}.</p>
            <p>I was born in {year - age }.</p>
        </div>
    )
}