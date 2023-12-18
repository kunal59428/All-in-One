import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/home/Home';
import Donar from './pages/donar/Donar/Donar';
import Consumer from './pages/user/Consumer';
import MyState from './components/context/data/myState';
import Product from './pages/product/Product';
import Navbar from "./components/navbar/Navbar"
import Footer from './components/footer/Footer';
import "./App.css"
import DonationForm from './pages/donar/DonationForm/DonationForm';
import Login from './components/Login/Login';
import DonarLogin from './pages/donar/DonarLogin/DonarLogin';
import DonarRegister from './pages/donar/DonarReg/DonarRegister';

function App() {
  return (
    <MyState>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/donar' element={<Donar/>}/>
        <Route path='/user' element={<DonationForm/>}/>
        <Route path='/dlogin' element={<DonarLogin/>}/>
        <Route path='/dregister' element={<DonarRegister/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer />
    </Router>
    </MyState>
  )
}

export default App