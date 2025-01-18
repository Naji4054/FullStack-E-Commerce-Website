import React from 'react'

const PromoBanner = () => {
  return (
<section className='section__container banner__container'>
<div className='banner__card'>
    <span><i className="ri-truck-line"></i></span>
    <h4>Free Delivery</h4>
    <p>Offers convinience and the ability to shop from anywhere, anytime.</p>
</div>
<div className='banner__card'>
    <span><i className="ri-money-dollar-circle-line"></i></span>
    <h4>100% Money Back Guaranty</h4>
    <p>Incase of refund, full ammount of the product is returnable.Terms and Conditions applied .</p>
</div>
<div className='banner__card'>
    <span><i className="ri-user-voice-fill"></i></span>
    <h4>Customer Support </h4>
    <p>Offer customer services to assist queries on working hours. </p>
</div>
</section>
  )
}

export default PromoBanner
