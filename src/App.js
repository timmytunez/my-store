import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './components/Layouts';
import House from './pages/House';
import About from './pages/About';
import Contact from './pages/Contact';
import Ourstore from './pages/Ourstore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgetpassword from './pages/Forgetpassword';
import Signup from './pages/Signup';
import Emailreset from './pages/Emailreset'
import SingleBlog from './pages/SingleBlog';
import TermsAndCondition from './pages/TermsAndCondition';
import ShoppingPolicy from './pages/ShoppingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layouts/>}>
          <Route path='/'  element = {<House/>} />
          <Route  element= {<About/>}/>
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/product' element= {<Ourstore/>}/>
          <Route path='/product/:id' element= {<SingleProduct/>}/>
          <Route path='/blogs' element= {<Blog/>}/>
          <Route path='/blogs-id' element= {<SingleBlog/>}/>
          <Route path='/compare-product' element= {<CompareProduct/>}/>
          <Route path='/wishlist' element= {<Wishlist/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route path='/cart' element= {<Cart/>}/>
          <Route path='/checkout' element= {<Checkout/>}/>
          <Route path='/forget-password' element= {<Forgetpassword/>}/>
          <Route path='/signup' element= {<Signup/>}/>
          <Route path='/resetpass' element= {<Emailreset/>}/>
          <Route path='/terms' element= {<TermsAndCondition/>}/>
          <Route path='/shipping' element= {<ShoppingPolicy/>}/>
          <Route path='refund' element= {<RefundPolicy/>}/>
          <Route path='/privacy' element= {<PrivacyPolicy/>}/>


          





        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
