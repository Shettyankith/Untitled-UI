import "./blog_card.css"

import React from 'react'

function blog_card({type,header,explaination,pic,name,date,blog_photo}) {
  return (
    <div className="blog_post"> 
       <img src={blog_photo} alt="image" />
       <p>{type}</p>
       <div className="one">
            <h3>{header}</h3>
            <i class="fa-solid fa-arrow-trend-up"></i>
       </div>
       <h6>{explaination}</h6>
       <div className="user">
            <img src={pic} alt="" />
            <div className="details">
                <p>{name}</p>
                <h6>{date}</h6>
            </div>
       </div>
    </div>
  )
}

export default blog_card