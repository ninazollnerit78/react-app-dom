import React, { useContext } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Item = (props) => {
  const {addToFollow} = useContext(ShopContext);

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <div className="opis">
        <h4>{props.name}</h4>
        <button className='follow' onClick={() => {addToFollow(props.id)}}>FOLLOW</button>
      </div>
      <p>{props.price} RSD</p>
    </div>
  )
}

export default Item;
