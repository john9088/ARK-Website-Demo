import React from 'react'

const Home = () => {
    return(
        <section id="home">
            <div id="intro" className="intro">
            <img src="ARK-Website-Demo/ark-dark.png" alt="" className="land_img" />
            <div className="hero-content">
          <h1>Ark<span style={{color: "#e9322e"}}> Energy</span>,</h1>

          <p>UNLEASH THE POWER OF YOUR ENERGY DATA UNIVERSE</p>

          <div className="button-container-home">
            <button className="button button1">
              <a href="https://www.linkedin.com/company/ark-lab/">Linkedin</a>
            </button>
            <button className="button button2">
              <a href="https://www.ark-energy.eu/">ARK.COM</a>
            </button>
          </div>
        </div>
      </div>
    </section>
    )
} 

export default Home