import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import LoginSignup from './Pages/LoginSignup'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Follow from './Pages/Follow'
import ShopCategory from './Pages/ShopCategory'
import Single from './Pages/Single'

function App() {

  return (
    <div>
      <BrowserRouter> 
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/fotelje' element={<ShopCategory naslov="FOTELJE" category="FOTELJE"/>} />
          <Route path='/trosedi' element={<ShopCategory naslov="TROSEDI" category="TROSEDI" />} />
          <Route path='/komode' element={<ShopCategory naslov="KOMODE" category="KOMODE" />} />
          <Route path='/stolice' element={<ShopCategory naslov="STOLICE" category="STOLICE" />} />
          <Route path='/ramovizaslike' element={<ShopCategory naslov="RAMOVI ZA SLIKE" category="RAMOVI ZA SLIKE" />} />
          <Route path='/zavese' element={<ShopCategory naslov="ZAVESE" category="ZAVESE" />} />
          <Route path='/jastuci' element={<ShopCategory naslov="JASTUCI" category="JASTUCI" />} />
          <Route path='/rasveta' element={<ShopCategory naslov="RASVETA" category="RASVETA" />} />
          <Route path='/saksije' element={<ShopCategory naslov="SAKSIJE" category="SAKSIJE" />} />
          <Route path='/biljke' element={<ShopCategory naslov="BILJKE" category="BILJKE" />} />
          <Route path='/opremazabiljke' element={<ShopCategory naslov="OPREMA ZA BILJKE" category="OPREMA ZA BILJKEOPREMA ZA BILJKE" />} />
          <Route path='/loginsignup' element={<LoginSignup/>}/>
          <Route path='/product' element={<Single/>}>
            <Route path=':productId' element={<Single/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/follow' element={<Follow/>}/>
        </Routes> 
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App