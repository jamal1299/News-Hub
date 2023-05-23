import React, { useRef } from 'react'

const Contact = ()=>{

    const padding = {
        padding: "30px",
    }
    const height = {
        height: "50px",
    }
    const name = useRef();
    const email = useRef();
    const message = useRef();
    const subject = useRef();

    const validateMessage = ()=>{
        if(!name.current.value.match(/[a-zA-Z]+/))
        {
            alert("Please Enter Only Characters in name");
        }
        if(email.current.value === "" && email.current.value.length < 5)
        {
            alert("Please Enter Valid Email");
        }
        if(subject.current.value.length < 5)
        {
            alert("Please Enter Subject more than 5 character");

        }
        if(message.current.value.length < 5)
        {
            alert("Please Enter Message more than 5 character");
        }
      
   

    
    }
        return(
        <>
        

    <div class="container-fluid">
        <div class="container">
            <nav class="breadcrumb bg-transparent m-0 p-0">
                <a class="breadcrumb-item" href="/#">Home</a>
                <span class="breadcrumb-item active">Contact</span>
            </nav>
        </div>
    </div>
  
    <div class="container-fluid py-3">
        <div class="container">
            <div class="bg-light py-2 px-4 mb-3">
                <h3 class="m-0">Contact Us For Any Queries</h3>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <div class="bg-light mb-3" style={padding}>
                        <h6 class="font-weight-bold">Get in touch</h6>
                        <p>Labore ipsum ipsum rebum erat amet nonumy, nonumy erat justo sit dolor ipsum sed, kasd lorem sit et duo dolore justo lorem stet labore, diam dolor et diam dolor eos magna, at vero lorem elitr</p>
                        <div class="d-flex align-items-center mb-3">
                            <i class="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                            <div class="d-flex flex-column">
                                <h6 class="font-weight-bold">Our Office</h6>
                                <p class="m-0">123 Street, Peshawar, Pakistan</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <i class="fa fa-2x fa-envelope-open text-primary mr-3"></i>
                            <div class="d-flex flex-column">
                                <h6 class="font-weight-bold">Email Us</h6>
                                <p class="m-0">jalalmehmood181@gmail.com</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <i class="fas fa-2x fa-phone-alt text-primary mr-3"></i>
                            <div class="d-flex flex-column">
                                <h6 class="font-weight-bold">Call Us</h6>
                                <p class="m-0">+92 3189191789</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="contact-form bg-light mb-3" style={padding}>
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div class="form-row">
                                <div class="col-md-6">
                                    <div class="control-group">
                                        <input type="text" class="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" ref={name} />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="control-group">
                                        <input type="email" class="form-control p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" ref={email} />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" 
                                ref={subject} />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <textarea class="form-control" rows="4" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"
                                ref={message}></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-primary font-weight-semi-bold px-4" style={height} type="submit" id="sendMessageButton" onClick={validateMessage}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )

}
export default Contact