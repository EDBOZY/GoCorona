import React from 'react'
import './Talk.css'
import a from './Group 26.png'

function Talk() {
  return (
    <div className="talk">
        <div className="up">
            <div className="box">
                <div className="content">
                    <h1>2m</h1>
                    <span>USERS</span>
                </div>
                <div className="content">
                    <h1>78</h1>
                    <span>COUNTRIES</span>
                </div>
                <div className="content">
                    <h1>10000+</h1>
                    <span>MEDICAL EXPERTS</span>
                </div>
            </div>
        </div>
        <div className="down">
            <div className="l">
                <h1>Talk to experts.</h1>
                <p>Book appointments or submit queries into thousands of forums concerning health issues and prevention against noval Corona Virus.</p>
                <button>Features</button>
            </div>
            <div className="r">
                <img src={a} alt="" />
            </div>
        </div>
        <div className='bo1'></div>
        <div className='bo2'></div>
        <div className='bo3'></div>
    </div>
  )
}

export default Talk