import React from 'react'
import Topsection from '../../components/Topsection/Topsection'
import NewArrival from '../../components/New-arrival/NewArrival'
import "./Home.css";
import Otherproduct from '../../components/otherProduct/OtherProduct';
import Contact from '../Contact/contact';


function Home() {
  return (
    <div>
      <div className="Topsection">
      <Topsection/>
      </div>
      <NewArrival/>
      <Otherproduct/>
      
      <Contact/>
    </div>
  )
}

export default Home
