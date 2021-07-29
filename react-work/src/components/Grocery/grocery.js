
export default function Grocery ({data}){
    console.log(data[0].item)
    return(
       <div>
           {data.map((grocery)=>{
               return(
                   <div>
                   <p>{grocery.item} - {grocery.brand}</p>
                   <h5>{grocery.quantity}</h5>
                   <h5>{grocery.price}</h5>
                   </div>
               )
           })}
       </div>
    )
}