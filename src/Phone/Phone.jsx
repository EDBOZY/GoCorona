import React from 'react'
import './Phone.css'
import a from './Group 3.png'

function Phone() {
  return (
    <div className="phone">
        <div className="left">
            <img src={a} alt="" />
        </div>
        <div className="right">
            {/* <h1>Stay safe with GoCorona.</h1> */}
            <h1>Stay safe with <span style={{color:"#EC5863"}}>GoCorona</span>.</h1>

            <p>24x7 Support and user friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.</p>
            <button>Features</button>
        </div>
        <div className="box onee"></div>
        <div className="box twoo"></div>
        <div className="box big"></div>
    </div>
  )
}

export default Phone