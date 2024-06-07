import React from 'react'
import "./Item.css"

function Item({icon,heading,text}) {
  return (
    <div className='item_container'>
      <button><i className={icon}></i></button>
      <h6>{heading}</h6>
      <p>{text}</p>
    </div>
  )
}

export default Item