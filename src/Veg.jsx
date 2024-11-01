import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { addTocart } from "./Store";
function Veg()
{
  const vegProducts = useSelector(state=>state.Products.Veg)
  const dispatch = useDispatch()
  const items = vegProducts.map((product,index)=>
    
    <li key={index} style={{backgroundColor:'white',color:'black',margin:20,borderRadius:35}} >
      {product.name} -${product.price.toFixed(2)}
     <button onClick={()=>dispatch(addTocart(product))} style={{color:'green',backgroundColor:'lightgreen',margin:20}}>Add to Cart</button>
    </li>
    
  )
  return(
    <>
    
      <h1>Veg products</h1>
     
        
      <p> {items}</p>
      
    </>
  )
}
export default Veg;