import{ useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  // console.log('cartItems cart', cartItems);
  const navgitate = useNavigate()

  const [emptyCart, setEmptyCart] = useState(cartItems)
  console.log('emptyCart state' ,emptyCart);
  
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quanity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {food_list.map((item, index) => {
          // console.log('item cart', item);

          // TH nếu trong cartItems có bất kì 1 sp nào đó (khi cartItems ko là 1 object rỗng)
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}.000</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}.000</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          } 
          
        })}

        

      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}.000</p>
            </div>

            <hr/>

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 10.000}</p>
            </div>

            <hr/>

            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10}.000</b>
            </div>

            <hr/>

          </div>
          <button onClick={() => navgitate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
        <div>
          <p>If you have a promo code, enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code..." name="" id="" />
            <button>Submit</button>
          </div>
        </div>
      </div>

      </div>
      
    

    </div>
  );
};

export default Cart;
