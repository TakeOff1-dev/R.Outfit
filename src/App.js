
import './App.css';
import { useEffect, useState } from 'react';

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

//pages
import Home from './pages/Home'
import Filter from './pages/Filter'
import Shop from './pages/Shop'
import Category from './pages/Category'

// //Test
// import Todo from './test/Todo'


// routes
import { Route, Routes } from 'react-router-dom';


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
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='/Category' element={<Category />} />
        <Route path='/Contact' element={<Contact />} />


      </Routes>


      <Footer />
    </div>
  );
}

export default App;
