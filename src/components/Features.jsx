import "./Features.css"
import Item from "./Item"
import React from 'react'

function Features() {
    const item=[
        {
           icon:"fa-regular fa-comments",
           heading:"Share team inboxes",
           text:"Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        },
        {
            icon:"fa-brands fa-superpowers",
            heading:"Deliver instant answers",
            text:"An all-in-one customer service platform that helps you balance everything your customers need to be happy."
         },
         {
            icon:"fa-solid fa-list-check",
            heading:"Manage your team with reports",
            text:"Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
         },
         {
            icon:"fa-brands fa-nfc-symbol",
            heading:"Connect with customers",
            text:"Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
         },
         {
            icon:"fa-solid fa-compact-disc",
            heading:"Connect the tools you already use",
            text:"Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools"
         },
         {
            icon:"fa-brands fa-unity",
            heading:"Our people make the difference",
            text:"We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
         },
    ]
  return (
    <section className="features"> 
    <div>
        <p>Features</p>
        <h1>Analytics that feels like it's from the future</h1>
        <h4>Powerful, self-serve product and growth analytics to help you convert,engage, and retain more users. Trusted by over 4,000 startups.</h4>
    </div>
    <div className="items">
        {
            item.map((item,index)=>{
                return <Item key={index} icon={item.icon} heading={item.heading} text={item.text}/>
            })
        }
    </div>
    </section>
  )
}

export default Features