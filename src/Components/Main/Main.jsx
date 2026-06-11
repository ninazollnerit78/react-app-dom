import React from 'react'
import './Main.css'
import data_product from '../Assets/data.js'
import Item from '../Item/Item.jsx'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <div className="oglasi container">
        <div className='oglasi-naslov'>
            <h3>NOVI OGLASI</h3>
            <button className='btn-white'>POGLEDAJ SVE...</button>
        </div>
        <div className="oglasi-cards">
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
            })}
        </div>
      </div>

      <div className="kategorije container">
        <h4>POPULARNE KATEGORIJE</h4>
        <div className='dugmad'>
            <button className='btn-green btn-kategorije'><Link to='/fotelje'>FOTELJE</Link></button>
            <button className='btn-green btn-kategorije'>SAKSIJE</button>
            <button className='btn-green btn-kategorije'>ODLAGANJE</button>
            <button className='btn-green btn-kategorije'><Link to='/rasveta'>RASVETA</Link></button>
        </div>
        <div className="dugmad">
            <button className='btn-green btn-kategorije'>ZAVESE</button>
            <button className='btn-green btn-kategorije'>TROSEDI</button>
            <button className='btn-green btn-kategorije'><Link to='/stolice'>STOLICE</Link></button>
            <button className='btn-green btn-kategorije'>KOMODE</button>
        </div>
      </div>
    </>
  )
}

export default Main