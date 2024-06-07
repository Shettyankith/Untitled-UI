import "./Manager.css"
import logo from "../assets/badge.png"
import React from 'react'

function Manager() {
  return (
    <section className="manager">
        <div>
        <p className="sisyphus"> <img src={logo} alt="" /> Sisyphus</p>
        <h1>We've been using Untitled ton kick start every new project and can't imagine working without it </h1>
        <img src="https://images.pexels.com/photos/1310524/pexels-photo-1310524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <p>Candice Wu</p>
        <h6>Product Manager, Sisyphus</h6>
        </div>
    </section>
  )
}

export default Manager