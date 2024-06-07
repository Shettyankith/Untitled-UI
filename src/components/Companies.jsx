import React from 'react'
import "./Companies.css"
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import c5 from "../assets/c5.png"
import c6 from "../assets/c6.png"

function Companies() {
  return (
    <section className='company_section'>
        <div>
        <p>Join 4,000+ companies already growing</p>
    </div>
    <div className="compnay_names">
        <div>
            <img src={c1} alt="" />
            <h4>BoltShift</h4>
        </div>
        <div>
            <img src={c2} alt="" />
            <h4>LightBox</h4>
        </div>
        <div>
            <img src={c3} alt="" />
            <h4>FeatherDev</h4>
        </div>
        <div>
            <img src={c4} alt="" />
            <h4>Spherule</h4>
        </div>
        <div>
            <img src={c5} alt="" />
            <h4>GlobalBank</h4>
        </div>
        <div>
            <img src={c6} alt="" />
            <h4>Neitzsche</h4>
        </div>
    </div>
    </section>
    
  )
}

export default Companies