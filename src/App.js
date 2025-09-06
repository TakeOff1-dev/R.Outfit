
import './App.css';

// components
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Creact from './components/Creact'
import Profile from './components/Profile'

//pages
import Home from './pages/Home'
import Filter from './pages/Filter'
import Shop from './pages/Shop'

// //Test
// import Todo from './test/Todo'


// routes
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header />

<Routes>
{/* <Route path='/' element={ <Todo /> } /> */}
 <Route path='/' element={ <Home /> } /> 
     <Route path='/Home' element={ <Home /> } /> 
      <Route path='/Shop' element={ <Shop /> } /> 
     <Route path='/Login' element={<Login />} />
      <Route path='/Creact' element={<Creact />} />
      <Route path='/Profile' element={<Profile />} />
 <Route path='/Filter' element={ <Filter /> } /> 


</Routes>


     <Footer />
    </div>
  );
}

export default App;
