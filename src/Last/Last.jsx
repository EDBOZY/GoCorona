import React from 'react'
import './Last.css'
import b from './Vector (1).png'
import c from './Vector (2).png'
import d from './Vector.png'
import e from './image 1.png'
import f from './image 2.png'

function Last() {
  return (
    <div className="last">
        <h1 className='h'>Healthcare at your Fingertips.</h1>
        <p className='hp'>Bringing premium healthcare features to your fingertips. User friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.</p>
        
        
        
        <div className="container">
            <div className="boxex">
                <div className="box">
                    <img src={b} alt="" />
                    <h1>Symptom Checker</h1>
                    <p>Check if you are infected by COVID-19 with our Symptom Checker</p>
                </div>
                <div className="box">
                    <img src={c} alt="" />
                    <h1>24x7 Medical support</h1>
                    <p>Consult with 10,000+ health workers about your concerns.</p>
                </div>
                <div className="box">
                    <img src={d} alt="" />
                    <h1>Conditions</h1>
                    <p>Bringing premium healthcare features to your fingertips.</p>
                </div>
            </div>
            <div className="images">
                <img className='aa' src={e} alt="" />
                <img className='a' src={f} alt="" />
            </div>
            
        </div>
        <div className="design">
        <div className="rectangle small one"></div>
        <div className="rectangle small two"></div>
        <div className="rectangle medium"></div>
        <div className="rectangle large"></div>
        </div>
    </div>
  )
}

export default Last