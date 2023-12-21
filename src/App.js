import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/home/Home';
import Donar from './pages/donar/Donar/Donar';
import MyState from './components/context/data/myState';
import Footer from './components/footer/Footer';
import "./App.css"
import Login from './components/Login/Login';
import ConsumerSwt from './pages/Consumer/Consumer/consumer';
import Product from './pages/donar/Product/Product';
import DonationForm from './pages/donar/DonationForm/DonationForm';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <MyState>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/donar' element={<Donar/>}/>
        {/* <Route path='/clogin' element={<ConsumerLogin/>}/>
        <Route path='/cregister' element={<ConsumerRegister/>}/> */}
        <Route path='/Consumer' element={<ConsumerSwt/>}/>
        {/* <Route path='/dlogin' element={<DonarLogin/>}/>*/}
        <Route path='/dForm' element={<DonationForm/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path ="/product" element={<Product/>} />
      </Routes>
      <Footer />
    </Router>
    </MyState>
  )
}

export default App