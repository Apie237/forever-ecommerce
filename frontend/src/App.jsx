import React from 'react'
import './index.css';
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Login from './pages/Login'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Orders from './pages/Orders'
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/about' element={< About/>}/>
        <Route path='/contact' element={< Contact/>}/>
        <Route path='/collection' element={< Collection/>}/>
        <Route path='/login' element={< Login/>}/>
        <Route path='/cart' element={< Cart/>}/>
        <Route path='/orders' element={< Orders/>}/>
        <Route path='/placeorder' element={< PlaceOrder/>}/>
        <Route path='/verify' element={< Verify/>}/>
        <Route path="/product/:productId" element={<Product />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App