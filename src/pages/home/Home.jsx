import React from 'react'
import Topsection from '../../components/Topsection/Topsection'
import NewArrival from '../../components/New-arrival/NewArrival'
import "./Home.css";


function Home() {
  return (
    <div>
      <div className="Topsection">
      <Topsection/>
      </div>
      <NewArrival/>
    </div>
  )
}

export default Home
