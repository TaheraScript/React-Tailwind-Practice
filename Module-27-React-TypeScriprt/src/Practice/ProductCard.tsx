//task-5
interface ProductType {
    productName : string,
    price : number
}
export default function ProductCard(props){
    return props.inStock? 'Available' : 'Out of stock'
}