import React, { useContext } from 'react'
import './FollowItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const FollowItems = () => {
    const {all_products, followItems, removeFromFollow} = useContext(ShopContext);
  return (
    <div className='followitems container'>
      <div className="followitems-format-main">
        <p>Artikal</p>
        <p>Naziv</p>
        <p>Cena</p>
        <p>Ukloni</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if(followItems[e.id] > 0) {
            return <div>
                        <div className="followitems-format followitems-format-main">
                            <img src={e.image} alt="" className='followicon-product-icon' />
                            <p>{e.name}</p>
                            <p>{e.price}</p>
                            <img src={remove_icon} className='followitems-remove-icon' onClick={() => {removeFromFollow(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
        }
        return null;
      })}
    </div>
  )
}

export default FollowItems
