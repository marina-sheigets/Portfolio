import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
const About=()=>{
    return(
      <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>
        <div className="container about_container">
          <div className="about_me">
              <div className="about_me_image">
                <img src={ME} alt="" />
              </div>
          </div>
          <div className="about_content"> 
              <p >Welcome to my portfolio.<br/> My name is Marina. 
              I am beginner front-end developer.
              Here you can see my own projects and contact with me.</p>
                <a href="#contact" className='btn btn-primary btn-about'>Let's Talk</a>
          </div>
        </div>
      </section>
    )
}

export default About;