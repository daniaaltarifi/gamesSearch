import React from 'react'
const Contact = (props) => {
  return (
    <div className="container">
    <div className="mpl-box-md ">
              <div className={props.hideen?"introduction":"hide"}>
                  <h2 className="display-2 text-center contactName" >Contact Us</h2>
                  <form className="mpl-form" >
                      <div className="row justify-content-center">
                          <div className="col-12 col-md-8 col-lg-6">
                              <div className="row  contactInfo" >
                                  <div className="col-12 ">
                                      <textarea className="form-control boxInfo" rows="5" id="contact_message" name="message" placeholder="Write Message" required></textarea>
                                  </div>
                                  <div className="col-12 col-md-6" >
                                      <input className="form-control boxInfo" type="text" id="contact_name" name="name" placeholder="Your Name" required/><span className="form-control-bg"></span>
                                  </div>
                                  <div className="col-12 col-md-6">
                                      <input className="form-control boxInfo" type="email" id="contact_email" name="email" placeholder="Your Email" required/><span className="form-control-bg"></span>
                                  </div>
                                  <p></p>
                                  <div className="col-12" >
                                      <button className="btn btn-md contactBtn">Submit Message</button>
                                      
                                  </div>
                              </div>
                          </div>
                      </div>
                  </form>
              </div>
          </div>

</div>
  )
}

export default Contact
