import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <>
        <div className="bottom-bar">
            <div className="container">
                <p><span>ULOGUJ SE</span> I KUPI SVOJ <br /> OMILJENI KOMAD</p>
                <button className='btn-brown'>ULOGUJ SE</button>
            </div>
        </div>

        <footer>
            <div>
                <img src={logo} alt="" />
                <p>Nađi svoj omiljeni komad.</p>
            </div>
        </footer>
    </>
  )
}

export default Footer
