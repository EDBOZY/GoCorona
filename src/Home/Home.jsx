import React from 'react'
import './Home.css'
import Navbar from '../Nvbar/Navbar'
import a from './Group 14.png'
import second from './Group 23.png'

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="left">
          <h1>Take care of yours family’s health.</h1>
          <p>All in one destination for COVID-19 health queries.  Consult 10,000+ health workers about your concerns.</p>
          <button>Get Started</button>
          <div className="stay">
          {/* <img src={second} style={{height:"5vh",width:"5vh"}} alt="" /> */}

            <button className='h'></button>
            <div className="text">
              <span>Stay safe with GoCorona</span>
              <span>Watch Video</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="r">
          <img src={a} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home