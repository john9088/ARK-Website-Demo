import React from 'react'

const News = () => {
    return(
        <section className="project-content" id="News">
      <div className="container">
        <div className="row my-5">
          <div className="col-sm-6" align="center">
            <img
              src="https://www.ark-energy.eu/wp-content/uploads/image001-360x194.png"
            />
          </div>
          <div className="col-sm-6" align="center">
            <h3>ARK sponsors Utility Day 2018 in Milan</h3>
            <p>
              We will be at Utility Day 2018 in Milan to showcase Artesian and
              introduce DNL, our new tool dedicated to managing the dialogue
              with distributors. Come and see us on October 25th !
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-sm-6" align="center">
            <img
              src="https://www.ark-energy.eu/wp-content/uploads/1529997118469-360x180.jpg"
            />
          </div>
          <div className="col-sm-6" align="center">
            <h3>ARK at Energy Risk Europe</h3>
            <p>
              Artesian, our innovative Data Preparation as a Service product,
              came out of closed beta at the end of June. We sponsored Energy
              Risk Europe in London in order to mark the event. We will now be
              focusing on further product enhancements and
              marketing/distribution. You can find out more on
              www.artesian.cloud or you can view a brief
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-sm-6" align="center">
            <img
              src="https://www.ark-energy.eu/wp-content/uploads/EventLogo.png"
            />
          </div>
          <div className="col-sm-6" align="center">
            <h3>ARK at Dublin Tech Summit</h3>
            <p>
              ARK will be at the Dublin Tech Summit on April 18th-19th. Pop in
              to see us on stand SU42.
            </p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default News