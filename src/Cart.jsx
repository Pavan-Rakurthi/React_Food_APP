import { useDispatch, useSelector } from "react-redux";
import { decrement, increment ,remove} from "./Store";
import { useState } from "react";

function Cart()
{
  const cartitems = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const itemslist = cartitems.map((product,index)=>
    <p key={index} style={{backgroundColor:'white',color:'black',margin:20,borderRadius:35}}>
      {product.name} -  ${product.price.toFixed(2)}   Quantity:  {product.quantity}
      <button onClick={()=>dispatch(increment(product))} style={{color:'green',backgroundColor:'lightgreen',margin:20}}> +</button ><button onClick={()=>dispatch(decrement(product))} style={{color:'green',backgroundColor:'lightsalmon'}}>-</button> <button onClick={()=>dispatch(remove(product))}>Remove</button>
    </p> 
  )
      //discount calculation

      const [discountprice,setdiscountprice] =useState(0);
      //rendering the couponcode from input by using usestate
      const [couponcode,setcouponcode]  =useState('');
      const [coupondiscount,setcoupondiscount] = useState(0);
      //apply cupon code onclick function
    
      const  handlecoupondiscount=()=>
      {
        switch(couponcode)
        {
          case 'PAVAN10':
            setcoupondiscount(10)
            break;
          case 'PAVAN20':
            setcoupondiscount(20)
            break;
          case 'PAVAN30':
            setcoupondiscount(30)
            break;
          case 'PAVAN40':
            setcoupondiscount(40)
            break;
          default:
            alert("Invalid coupon")
            break;

        }
      }



      const handeldiscount = (discountvalue)=>
      {
        setdiscountprice(discountvalue);
      }
     //claculate total price
      const calculate=()=>{
        const totalPrice = cartitems.reduce((total,item)=>total + item.price * item.quantity,0);

      //take the variable to maintain the discount percentage
      

      //claculating discount amount


      const coupondiscountamoutn = totalPrice * (coupondiscount/100);

      const discountAmount = totalPrice * (discountprice/100);
      //calculating net Amount
      const netAmount = totalPrice - discountAmount;

      const finalamount = totalPrice -discountAmount-coupondiscountamoutn;
      return{
        totalPrice:parseFloat(totalPrice.toFixed(2)),
        discountAmount:parseFloat(discountAmount.toFixed(2)),
        netAmount:parseFloat(netAmount.toFixed(2)),
        finalamount:parseFloat(finalamount.toFixed(2)),
        coupondiscountamoutn:parseFloat(coupondiscountamoutn.toFixed(2))

      }

    }
      const {totalPrice,netAmount,discountAmount,finalamount,coupondiscountamoutn} = calculate()

  return(
    <>
      
      {
        
        itemslist.length >0?(
        
        
        <p>
          <p>Total before discounts: ${totalPrice}</p>
          {itemslist}
        
        <button onClick={()=>handeldiscount(10)}>Apply 10% Discount</button>
        <button style={{margin:50} } onClick={()=>handeldiscount(20)}>Apply 20% Discount</button>
        <button onClick={()=>handeldiscount(30)}>Apply 30% Discount</button><br />
        
        <label htmlFor="">Enter CouponCode:</label>
        <input type="text" value={couponcode}  onChange={(e)=>setcouponcode(e.target.value)} placeholder="Enter CouponCode" style={{margin:20}} /><br />
        <button onClick={handlecoupondiscount}>Apply CouponCode</button>
        <p>CouponCode DiscountAmount:{coupondiscountamoutn}</p>
        <p>Discount Percentage Applied:{discountprice}</p>
        <p>Discount Amount:${discountAmount}</p>
        <p>Toatal discountAmount:{discountAmount+coupondiscountamoutn}</p>
       
        <p>Final Amount After all Discounts:${finalamount}</p>
        </p>):(<h1>Your Cart is Empty</h1>)
      }
      
    </>
  )
}
export default Cart;