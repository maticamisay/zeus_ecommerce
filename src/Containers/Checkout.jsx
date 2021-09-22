import React from 'react'
import '../Styles/Containers/Cart.css'

function Checkout() {
    // const { state, removeFromCart } = useContext(AppContext);
    // const { cart } = state;

    // const handleRemove = product => () => {
    //     removeFromCart(product);
    // }

    // const handleSumTotal = () => {
    //     const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
    //     const sum = cart.reduce(reducer, 0);

    //     return sum;
    // }

    return (
        <div className="CartContainer">
   	   <div className="Header">
   	   	<h3 className="Heading">Shopping Cart</h3>
   	   	<h5 className="Action">Remove all</h5>
   	   </div>

   	   <div className="Cart-Items">
   	   	  <div className="image-box">
   	   	  	<img src="" />
   	   	  </div>
   	   	  <div className="about">
   	   	  	<h1 className="title">Apple Juice</h1>
   	   	  	<h3 className="subtitle">250ml</h3>
   	   	  </div>
   	   	  <div className="counter">
   	   	  	<div className="btn">+</div>
   	   	  	<div className="count">2</div>
   	   	  	<div className="btn">-</div>
   	   	  </div>
   	   	  <div className="prices">
   	   	  	<div className="amount">$2.99</div>
   	   	  	<div className="save"><u>Save for later</u></div>
   	   	  	<div className="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>

   	 <hr/> 
   	 <div className="checkout">
   	 <div className="total">
   	 	<div>
   	 		<div className="Subtotal">Sub-Total</div>
   	 		<div className="items">2 items</div>
   	 	</div>
   	 	<div className="total-amount">$6.18</div>
   	 </div>
   	 <button className="button">Checkout</button></div>
   </div>
    )
}

export default Checkout
