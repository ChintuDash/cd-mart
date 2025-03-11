import React from 'react';
// import './App.css'

import {HashRouter,Route,Routes,Navigate,Link} from 'react-router-dom';

import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Category from './Components/Category/Category.js';
import Footer from './Components/Footer.js';
import Offers from './Components/Offers.js';
import Popular from './Components/Popular.js';
import Account from './Components/Account.js';
import Signin from './Components/Sign-in.js';
import Product_details from './Components/Product-Details.js';
import Product from './Components/Product.js';

import Footwere from './Components/Category/Mens/Footwere.js';
import Formal from './Components/Category/Mens/Formal.js';
import Jeans from './Components/Category/Mens/Jeans.js';
import Outerwere from './Components/Category/Mens/Outerwere.js';
import Tops from './Components/Category/Mens/Tops.js';
import Traditional from './Components/Category/Mens/Traditional.js';
function App(){
  return(
    <div>
      <HashRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Category" element={<Category/>}>
              <Route index element={<Tops/>}/>
               <Route path="Jeans" element={<Jeans/>}/>               
               <Route path="Traditional" element={<Traditional/>}/>
               <Route path="Formal" element={<Formal/>}/>
               <Route path="Outerwere" element={<Outerwere/>}/>
               <Route path="Footwere" element={<Footwere/>}/>
            </Route>
            <Route path="/Offers" element={<Offers/>}/>
            <Route path="/Popular" element={<Popular/>}/>
            <Route path="/Account" element={<Account/>}/>
            <Route path="/Signin" element={<Signin/>}/>
            <Route path="/Product-details" element={<Product_details/>}/>
            <Route path="/Product" element={<Product/>}/>
          </Routes>
          <Footer/>
      </HashRouter>
    </div>
  )
}
export default App;