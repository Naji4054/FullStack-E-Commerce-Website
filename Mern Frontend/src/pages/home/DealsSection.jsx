import React from 'react'
import dealsImg from "../../assets/deals.png"

const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
        <div className='deals__content'>
            <img src ={dealsImg} alt =""/>
        </div>
        <div className='deals__content'>
            <h5>Get Up To 20% Discount</h5>
            <h4>Deals Of The Month</h4>
            <p>Our Women's Fahsion Deals of the month  are here to make your style dreams a reality without breaking the bank . Discover a curated collection of exquisite clothing, accessories, and footwear, all handpicked to elevate your wardrobe</p>
        <div className='deals__countdown flex-wrap'>
        <div className='deals__countdown__card'>
            <h4>18</h4>
            <p>Days</p>

        </div>
        <div className='deals__countdown__card'>
            <h4>22</h4>
            <p>Hours</p>

        </div>
        <div className='deals__countdown__card'>
            <h4>18</h4>
            <p>Mins</p>

        </div>
        <div className='deals__countdown__card'>
            <h4>10</h4>
            <p>secs</p>

        </div>
        </div>
        </div>
    </section>
  )
}

export default DealsSection
