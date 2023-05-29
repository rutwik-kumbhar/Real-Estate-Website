import React from 'react'

const Hero = () => {
  return (
   <section className="hero-wrapper">
    <div className="paddings innerWidth flexCenter hero-container">

        <div className="hero-left">
            left Section
        </div>

        <div className="flexCenter  hero-right">
            <div className="imgage-container">
                <img src="./hero-image.png" alt="" />
            </div>
        </div>
    </div>
   </section>
  )
}

export default Hero