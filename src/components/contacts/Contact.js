import React from 'react'
import './Contact.css'
import {AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'
const Contact=()=>{

    const form = React.useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1y0oi5r', 'template_t2y1mjy', form.current, 'Gn-qBXwOjc33E2_U-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    
    return(
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                        <article className="contact_option">
                            <AiOutlineMail className='contact_icon'/>
                            <h4>Email</h4>
                            <h5>marinasejgec34@gmail.com</h5>
                            <a href="mailto:sejmar1705@gmail.com" target='_blank'>Send a message</a>
                        </article>

                        <article className="contact_option">
                            <RiMessengerLine className='contact_icon'/>
                            <h4>Messanger</h4>
                            <h5>marinashey</h5>
                            <a href="https://m.me/mery.shey"  target='_blank'>Send a message</a>
                        </article>
                       
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder='Your Message' required rows="7"></textarea>
                    <button type='submit' className='btn btn-primary'> Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;