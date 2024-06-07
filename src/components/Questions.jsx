import "./Questions.css"
import Qstn from "./Qstn"
import React from 'react'

function Questions() {
    const questions=[
        {
            question:"Is there a free trial available?",
            answer:"Yes, we offer a free trial for new users. This allows you to explore our platform's features and functionalities before committing to a paid plan. You can sign up on our website and start your free trial immediately.",
        },
        {
            question:"Can I change my plan later?",
            answer:"Absolutely, you can upgrade or downgrade your plan at any time based on your needs. Simply go to your account settings, choose the desired plan, and follow the prompts to make the change. The new plan will take effect immediately.",
        },
        {
            question:"What is your cancellation policy?",
            answer:"You can cancel your subscription at any time through your account settings. Upon cancellation, you will have access to your account until the end of the current billing period, after which your subscription will not be renewed.",
        },
        {
            question:"Can other info be added to the invoice?",
            answer:"Yes, additional information such as your company name, VAT number, or other relevant details can be added to your invoice. You can update this information in your billing settings before the invoice is generated.",
        },
        {
            question:"How does billing work?",
            answer:"Billing is processed on a monthly or annual basis, depending on your subscription plan. You will be charged at the beginning of each billing cycle, and you can view and download your invoices from the billing section of your account.",
        },
        {
            question:"How do I change my account email?",
            answer:"To change your account email, go to your account settings, select the option to update your email address, and follow the verification process. Once completed, your account email will be updated accordingly.",
        },
    ]
  return (
    <section className="questions">
        <div>
            <h1>Frequently asked questions</h1>
            <p>Everything you need to know about the product and billing</p>
        </div>
        <div className="question_list">
            {
               questions.map((q,index)=>{
                return <Qstn key={index} question={q.question} answer={q.answer}/>
               }) 
            }
        </div>
        <div className="contact">
            <div className="profile_photo">
                <img src="https://images.pexels.com/photos/3582102/pexels-photo-3582102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img src="https://images.pexels.com/photos/2328158/pexels-photo-2328158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img src="https://images.pexels.com/photos/2813995/pexels-photo-2813995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <p>Still have questions?</p>
           <h6> Can't find the answer tou are looking for? Please chat to our freindly team.</h6>
           <button className="purple">Get in Touch</button>
        </div>
    </section>
  )
}

export default Questions