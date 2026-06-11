import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const {addToFollow} = useContext(ShopContext);

  return (
    <div className='display container'>
      <img src={product.image} alt="" />
      <div className="informacije">
        <h3>{product.name}</h3>
        <p className='cena'>{product.price} RSD</p>
        <div className="dugmad">
            <button className='btn-green' onClick={() => {addToCart(product.id)}}>ADD TO CHART</button>
            <button className='follow' onClick={() => {addToFollow(product.id)}}>FOLLOW</button>
        </div>
        <p>{product.opis}</p>
      </div>
    </div>
  )
}

export default ProductDisplay
