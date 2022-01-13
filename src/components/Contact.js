import React from "react";

const Contact = (props) => {
  console.log(props)
  // setTimeout( () =>{
  //   props.history.push('/aboutus')
  // },2000)

  return (
    <section className="mb-4" style={{ backgroundColor: "purple",padding:'40px' }}>
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        <b>Contact us</b>
      </h2>

      <p className="text-center w-responsive mx-auto mb-5">
        <em>
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </em>
      </p>
      <form
        id="contact-form"
        name="contact-form"
        action="mail.php"
        method="POST"
      >
        <div className="row">
          <div className="col-md-6">
            <div className="md-form mb-0">
              <label htmlFor="name" className="">
                Your name
              </label>
              <br></br>
            </div>
          </div>

          <div className="col-md-6">
            <div className="md-form mb-0">
              <input type="text" id="name" name="name" className="form-control" />

              <br></br><br></br>
            </div>
          </div>
          <div className="col-md-6">
            <div className="md-form mb-0">
              <label htmlFor="name" className="">
                Your Email
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="md-form mb-0">
              <input type="text" id="name" name="name" className="form-control" />
              <br></br><br></br>
            </div>
          </div>
        
          <div className="col-md-6">
            <div className="md-form mb-0">
              
              <label htmlFor="subject" className="">Subject</label>
              
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="col-md-6">
            <div className="md-form mb-0">
              <input type="text" id="name" name="name" className="form-control" />
            </div>
            <br></br><br></br>
          </div>
          <div className="col-md-6">
            <div className="md-form mb-0">
            <label htmlFor="message">Your message</label>
            </div>
          
          </div>
          <div className="col-md-6">
            <div className="md-form mb-0">
            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
            </div>
          </div>
         
        </div>
      </form>
    </section>
  );
};

export default Contact;
