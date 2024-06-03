import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePageLayout from './pages/layout/HomePageLayout'
import Home from './pages/home/Home'
import AuthLayout from './pages/authentication/AuthLayout'
import ForgotPassword from './pages/authentication/ForgotPassword'
import Products from "./pages/products/Products"
import Register from './pages/authentication/Register'
import Login from './pages/authentication/Login'
import ProductPageLayout from './pages/layout/ProductPageLayout'
import Product from './pages/products/Product'
import Contact from './pages/contact/Contact'
import Cart from "./pages/cart/Cart"
import SellerLayout from "./pages/seller/layout/SellerLayout"
function FlowerPot() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<HomePageLayout/>}>
                <Route index path='/' element={<Home/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Route>
            <Route element={<SellerLayout/>}>
            </Route>
            <Route element={<ProductPageLayout/>}>
              <Route path=':id' element={<Product/>}/>
            </Route>
            <Route path="/auth"  element={<AuthLayout/>}>
              <Route path='login' element={<Login/>}/>
              <Route path='register' element={<Register/>}/>
              <Route path='forgot-password' element={<ForgotPassword/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
//HEADER/FOOTER/PRICES :- #00A86B
// PASTEL PURPLE :- #E6E6
// SOFT GREEN :- #98FB98
// TEXT COLOUR :- text-zinc-800
// Promotion Colours:- bg-[#e43d3d]

export default FlowerPot