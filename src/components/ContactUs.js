import React from 'react'

const ContactMe = () =>{
    return(
        <>
            <section id="contact">
      <div className="contact-content">
        <section className="contact-left">
          <h1 className="contact-head">Get in<br />Touch</h1>
        </section>

        <div className="contact-card">
          <div className="contactme-container">
            <div className="row100">
              <div className="col">
                <div className="inputbox">
                  <input type="text" name="" required="" id="first-name" />
                  <span className="text">First Name</span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="col">
                <div className="inputbox">
                  <input type="text" name="" required="" id="last-name" />
                  <span className="text">Last Name</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>

            <div className="row100">
              <div className="col">
                <div className="inputbox">
                  <input type="text" name="" required="" id="subject" />
                  <span className="text">Subject</span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="col">
                <div className="inputbox">
                  <input type="number" name="" required="" id="mobile-number" />
                  <span className="text">Mobile</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>

            <div className="row100">
              <div className="col">
                <div className="inputbox textarea" style={{height: "auto"}}>
                  <textarea
                    className="intextarea"
                    required="required"
                    wrap="HARD"
                    id="message"
                  ></textarea>
                  <span className="text">Type your Message</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>

            <div className="row100">
              <div className="col">
                <input type="submit" id="send-email" name="" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
    )
}

export default ContactMe