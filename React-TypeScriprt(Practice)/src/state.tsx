import { useState } from "react"

export default function AddToCart (){
    const [count,setCount] =useState(0)//state
    const handleAddCartScarf =() =>{
        setCount(count + 3)
    }
    const handleAddCartJeans =() =>{
        setCount(count + 1)
    }
    const handleAddCartShirt =() =>{
        setCount(count + 2)
    }



    return (
        <div>
            <h2>Add to Cart</h2>
            <p>Total Product : {count}</p>
            <button onClick={handleAddCartScarf}>Add scarf</button>
            <button onClick={handleAddCartJeans}>Add jeans</button>
            <button onClick={handleAddCartShirt}>Add shirt</button>
        </div>
    )
}