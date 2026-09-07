//Callback
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {console.log(data)})

//async await by normal function 
async function loadData (){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await res.json()
    return data;
}

//async await by arrow function
const loadData2 = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await res.json()
    return data;
}