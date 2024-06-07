import "./Blog.css"
import Card from "./blog_card"
import React from 'react'

function Blog() {
  const blog=[
    {
      blog_photo:"https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZzMNl8tFn2fo4MSUB9r9ia0U~zw-vqXXPigyTlWbVCSxKLouUEvd37I3o3NJHvba0ZiNnb958ieP9C5cgGjSKDy612j4dTUERy-5aoZ59KXlJpu9GBaeX57ktBX3kihBNaXyHTLVtv7VxQJBLROS3rFxKcHyge4ZBrjn8dpQXYPbzHxowOUVh7~4I33sUUIeaeA5~BFdfKXVVbPpY4tEyaTuJONc5C7PTEVbo2cBkxelvOJLQbqa-Gvg55dH02PNdbudTZ7iAN9YPd85~sypBCfV79gWx5LAHRyRzo-mXhf8gzd3SejMEyuQ04QXhxuUIyuMoF0ooanfE2~Taurs0w__",
      type:"Design",
      header:"UX review presentations",
      explaination:"How do you create compelling presentations that wow your colleagues and impress your managers?",
      pic:"https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=600",
      name:"Olivia Rhye",
      date:"20 Jan 2024",
    },
    {
      blog_photo:"https://s3-alpha-sig.figma.com/img/a4c5/2ab3/a3c522719b54dd45b1795921034a3f00?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VsPbF1l4pOZpjvup5IuTRaWkOmXRIXOv1hHwfBH8iq0eGg1C7i~p~ZK9xGGvEp-NM~ruGFS9GEiFWpRnSOg-lrrWuTaR9azOsrtyNJX5HWGSKoH8CzHSg8tQVX7s7pZYkEc5J79JS6Y6QcC6WjS-Kn1wxIKPm1viikgx3G5TAEb-lge2nTbaiRJLllzWfEV~pOoFceoa0GZNBZOLFIZraQZh-uwbM-jUEIPj8l9ASdyKaB4TSyeamms6Qkj3q1TXb885EC9hjfNcd6cC7JX6qwBe8F4uEwJS5cztNYMpBQ2uVSXZnwDVHiGWmmHQ8npB6nyHm68XYcdFUrpIiJRssA__",
      type:"Product",
      header:"Migrating to linear 101", 
      explaination:"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here's how to get started",
      pic:"https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=600",
      name:"Phoenix Baker",
      date:"19 Jan 2024",
    },
    {
      blog_photo:"https://s3-alpha-sig.figma.com/img/e2d0/7def/1dbd591c5182a37dfedc9ff110ae94d9?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PSvxU5n6Y6KQ7w-ie9csc4MpRXsaZ7614WVsMNTKT1tv4RO6snCWg7Fsqp1R-HxX-Kwr8j6MsJulOayExxy6pcFbIweTbti4HnZ03dnpdI8cCexy~q-lJKkU0Ie7GrKKS1s8BWREU2TM8-Mi~sjeYYDL9ItBnEVHCMjP8r9XJqt91BnhyRbXsVO5HYAAIgg-4KIXUs9eMbX8qVmQCA9evb6WswbIiBBk5MeVOHpXUqxBDvlVb4wH0CF~yxlsYwfIfVPcrplKUoZGCFGutNuMrZcJ3fa5ft-wezIuQEDpGP7LKmc0uhz7uNW-RSq9TkTDENsiO3sNV9NbAhtTRNnJ8Q__",
      type:"Software Engineering ",
      header:"Builiding you API stack",
      explaination:"The rise of RESTful API has been met by a rise in tools fro creating, testing, and managing them",
      pic:"https://images.pexels.com/photos/10893141/pexels-photo-10893141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:"Lana Steiner",
      date:"18 Jan 2024",
    },
  ]
  return (
    <section className="blog"> 
      <div className="header">
        <div>
          <p>Blog</p>
          <h4>Latest blog posts</h4>
          <h6>Tool and strategies modern teams need to help their companies grow</h6>
        </div>
        <div>
          <button className="purple">View all posts</button>
        </div>
      </div>
      <div className="posts">
        {
          blog.map((b,index)=>{
            return <Card key={index} type={b.type} header={b.header} explaination={b.explaination} pic={b.pic} name={b.name} date={b.date} blog_photo={b.blog_photo}/>
          })
        }
      </div>
      <div className="free_trial">
        <h1>Start your free trial</h1>
        <p>Join over 4,000+ startups growing with Untitled</p>
        <div>
          <button className="learn black">Learn more</button>
          <button className="start purple">Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default Blog