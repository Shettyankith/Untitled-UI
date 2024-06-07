import React from 'react'
import Navbar from "./Navbar"
import "./Hero.css"

function Hero() {
   
  return (
    <><Navbar />
    <div className='hero'>
        <div className="text">
            <div className='btns'>
                <button>new feature</button>
                <p>Check out the team dashboard <i class="fa-solid fa-arrow-right"></i></p>
            </div>
            <h1>Beautiful analytics to grow smarter</h1>
            <p className='description'>Powerful, self-serve product and growth anaytics to help convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            <div >
            <button className='demo black'><i class="fa-solid fa-circle-play"></i> Demo</button>
            <button className='signUp purple'>Sign Up</button>
            </div>
        </div>
        <div className='image'>
        <img
            src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tl5ZRygCNN25p2iHjATaEpArMFj1ql59YSklm5asoOsUd7MOQfZn-j0NdHSfHBFudd0P0FmKUFs9aQcLdkUd8J1dFi~dfUXEwolIfuLClHje-3c-xl9ozum7R9yEZVsXrjkMEfdIc-P3hXLRhhAkNf2RHfBjL~u7eRu-xjZmqcaarsV20NBh9I~2E2CO0VgL0pGhKU5DwFnAYjpIL4bt4qmPOVX9sjoOgu9HKVwE4MucDDpuTCzMBTTKv-L9lrKi95XkSLA3uwjhrHi-PhD9kpA2FLSMzXnnbkwDwMgMTnGmLZSZCqGTrf-MA1HGOKj~weIytE9eOlqeb9sEUD-Y5A__"
            alt=""
          />
        </div>
    </div></>
  )
}

export default Hero