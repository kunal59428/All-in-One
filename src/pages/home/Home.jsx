import React from 'react'
import Topsection from '../../components/Topsection/Topsection'
import NewArrival from '../../components/New-arrival/NewArrival'
import "./Home.css";
import Otherproduct from '../../components/otherProduct/OtherProduct';
import Contact from '../Contact/contact';
import Services from "../../components/Services/Services"


function Home() {
  return (
    <div>
      <div className="Topsection">
      <Topsection/>
      </div>
      <NewArrival/>
      <Otherproduct/>
      <Services/>
      
      <Contact/>
    </div>
  )
}

export default Home
