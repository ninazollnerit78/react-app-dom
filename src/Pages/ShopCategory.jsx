import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext.jsx'
import Item from '../Components/Item/Item.jsx';

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);

  return (
    <div className='shop-category container'>
      <h1>{props.naslov}</h1>
      <div className="shopcategory-product">
        {all_products.map((item, i) => {
          if(props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} category={item.category} image={item.image} price={item.price}/>
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory