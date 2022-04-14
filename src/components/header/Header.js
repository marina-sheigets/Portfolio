import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/avatar.jpg'
import HeaderSocials from './HeaderSocials'

const Header=()=>{
    return(
       <header>
           <div className="container header_container">
                <h5>Hello, I'm</h5>
                <h1>Marina Sheigets</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    <img src={ME} width='100' alt="" />
                </div>
                <a href="#contact" className='scroll_down' >Scroll Down</a>
           </div>
       </header>
    )
}

export default Header;