//task-7
export default function Cart({itemCount}:{itemCount : number}){
return itemCount > 0 &&  <button style={{border:'2px solid green', borderRadius : '5px', width:'200px '}}>'Checkout'</button>
}