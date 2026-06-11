import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_products, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cartitems container'>
      <div className="cartitems-format-main">
        <p>Artikal</p>
        <p>Naziv</p>
        <p>Cena</p>
        <p>Kolicina</p>
        <p>Ukloni</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if(cartItems[e.id] > 0) {
            return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>{e.price}</p>
                            <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                            <img src={remove_icon} className='cartitems-remove-icon' onClick={() => {removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
        }
        return null;
      })}
      <div className="cartitems-down">
            <h2>Ukupno</h2>
            <p>{getTotalCartAmount()} RSD</p>
            <button className='btn-green'>NASTAVI</button>
      </div>
    </div>
  )
}

export default CartItems
