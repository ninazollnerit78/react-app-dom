import React, { useContext, useState } from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/assets-02.png'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const NavBar = () => {

    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <>
        <div className='navbar container'>
            <Link to='/'><img src={logo} alt="" className='logo'/></Link>

        {/* <div className='search-button'>
            <button className='btn-green'>DODAJ OGLAS</button>
        </div> */}

        <div className='assets'>
            <Link to='/follow'><FontAwesomeIcon icon={faHeart} className='heart-icon' /></Link>
            <Link to='/cart'><img src={cart_icon} alt="" className='assets-img'/></Link>
            <div className='cart-count'>{getTotalCartItems()}</div>
            <Link to='/loginsignup'><button className='btn-white'>Login</button></Link>
        </div>
        </div>

        <div className='categories'>
            <ul className='container'>
                <li>NOVI<br />OGLASI</li>
                <hr />
                <li>
                    {['NAMEŠTAJ'].map(
                        (variant) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={variant}
                                id={`dropdown-variants-${variant}`}
                                variant={variant.toLowerCase()}
                                title={variant}
                            >
                                <Dropdown.Item eventKey="1"><Link to='/fotelje'>Fotelje</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="2"><Link to='/trosedi'>Trosedi</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="3"><Link to='/komode'>Komode</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="4"><Link to="/stolice">Stolice</Link></Dropdown.Item>
                            </DropdownButton>
                        ),
                    )}
                </li>
                <li>
                    {['DEKORACIJE'].map(
                        (variant) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={variant}
                                id={`dropdown-variants-${variant}`}
                                variant={variant.toLowerCase()}
                                title={variant}
                            >
                                <Dropdown.Item eventKey="1"><Link to='/ramovizaslike'>Ramovi za slike</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="2"><Link to='/zavese'>Zavese</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="3"><Link to="/jastuci">Jastuci</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="4"><Link to="/rasveta">Rasveta</Link></Dropdown.Item>
                            </DropdownButton>
                        ),
                    )}
                </li>
                <li>
                    {['DVORIŠTE I BASTA'].map(
                        (variant) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={variant}
                                id={`dropdown-variants-${variant}`}
                                variant={variant.toLowerCase()}
                                title={variant}
                            >
                                <Dropdown.Item eventKey="1"><Link to='/saksije'>Saksije</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="2"><Link to='/biljke'>Biljke</Link></Dropdown.Item>
                                <Dropdown.Item eventKey="3"><Link to='/opremazabiljke'>Oprema za biljke</Link></Dropdown.Item>
                            </DropdownButton>
                        ),
                    )}
                </li>
            </ul>
        </div>
    </>
  )
}

export default NavBar