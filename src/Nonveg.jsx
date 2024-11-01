import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { addTocart } from "./Store";
function Nonveg()
{
  const nonVegProducts = useSelector((state)=>state.Products.Nonveg)
  const dispatch = useDispatch()
  const itemss = nonVegProducts.map((product,index)=>
    <li key={index} style={{backgroundColor:'white',color:'black',margin:20,borderRadius:35}}>
      {product.name} -${product.price.toFixed(2)}
      <button onClick={()=>dispatch(addTocart(product))} style={{color:'green',backgroundColor:'lightgreen',margin:20}}>Add to Cart</button>
    </li>
  
  )
  return(
    <>
    <h1>Non Veg Items</h1>
      <ul>{itemss}</ul>
    </>
  )
}
export default Nonveg;