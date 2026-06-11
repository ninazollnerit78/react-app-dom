import React, { useContext } from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item.jsx'
import { ShopContext } from '../../Context/ShopContext.jsx';

const RelatedProducts = (props) => {
  const {all_products} = useContext(ShopContext);
  const {product} = props;

  return (
    <div className='relatedproducts container'>
        <div className="naslov">
            <h2>SLIČNI PROIZVODI</h2>
            <button className="btn-white">POGLEDAJ SVE...</button> 
        </div>
        <div className="relatedproducts-items">
            {all_products.map((item, i) => {
                if(product.category === item.category && product.id !== item.id) {
                  return <Item key={i} id={item.id} name={item.name} category={item.category} image={item.image} price={item.price} />
                }
            })}
        </div>
    </div>
  )
}

export default RelatedProducts
