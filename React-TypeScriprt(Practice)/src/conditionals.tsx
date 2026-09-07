export default function Person({name,isActive}:{name: string , isActive:boolean}){
let value;
if(isActive){
     value = '90'
    
}
 return <h2>{value}</h2>

}