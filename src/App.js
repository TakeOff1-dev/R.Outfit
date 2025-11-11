
import './App.css';
import { useEffect, useState } from 'react';
import CookieConsent from "react-cookie-consent"

// Product
import Product from './json/Filter.json'

// components
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Creact from './components/Creact'
import Profile from './components/Profile'
import Cart from './components/Cart'
import Favorites from './components/Favorites'
import Contact from './components/Contact'
import Shipping from './components/Shipping'
import Payment from './components/Payment'

//pages
import Home from './pages/Home'
import Filter from './pages/Filter'
import Shop from './pages/Shop'
import Category from './pages/Category'

//dashboard
import Addproduct from './dashboard/Addproduct'
import Dashboard from './dashboard/Dashboard'
import Sidenav from './dashboard/Sidenav'
import Newproduct from './dashboard/Newproduct'

 


// routes
import { Link, Route, Routes } from 'react-router-dom';


function App() {

  // add to cart
  const [cart, setCard] = useState([]);

  const addToCard = (item) => {
    const newCart = [...cart, item];
    alert(item.title)
    setCard(newCart);
  }



  return (
    <div className="App">

      <Header cart={cart} />

      <Routes>
        {/* <Route path='/' element={ <Todo /> } /> */}
        <Route path='/' element={<Home Product={Product} addToCard={addToCard} />} />
        {/* <Route path='/Home' element={<Home />} /> */}
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Creact' element={<Creact />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Filter' element={<Filter />} />
        <Route path='/Cart' element={<Cart cart={cart} setCard={setCard} />} />
        <Route path='/Shipping' element={<Shipping />} />
         <Route path='/Payment' element={<Payment />} />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='/Category' element={<Category />} />
        <Route path='/Contact' element={<Contact />} />
        {/* dashboard */}
        <Route path='/Addproduct' element={<Addproduct />} /> 
        <Route path='/Dashboard' element={<Dashboard />} />
         <Route path='/Sidenav' element={<Sidenav />} />
          <Route path='/Newproduct' element={<Newproduct />} />

      </Routes>


      <Footer />
      {/* cookieconsent component */}
      <CookieConsent debug={true}
        location='bottom'
        style={{
          background: '#fcfafaff',
          color: '#000',
        }}
        buttonStyle={{
          color: '#fcfafaff',
          background: '#000',

        }}
        buttonText="I Agree"
      >

        Cookies helps us deliver our services.
        by using our services or clicking I agree, you agree to use our Cookies
        <Link to="/policy">Learn more</Link>
      </CookieConsent>
    </div>
  );
}

export default App;
