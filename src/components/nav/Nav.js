import React from 'react'
import './Nav.css'
import {AiOutlineHome,AiOutlineUser,AiOutlineMessage,AiOutlineFileProtect} from 'react-icons/ai'
import {BiBookOpen} from 'react-icons/bi'

const Nav=()=>{
    const [activeNav,setActiveNav]=React.useState('#');

    return(
       <nav>
           <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active':''}><AiOutlineHome/></a>
           <a href="#about" className={activeNav==='#about'? 'active':''} onClick={()=>setActiveNav('#about')}><AiOutlineUser/></a>
            <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'? 'active':''}><BiBookOpen/></a>
            <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio'? 'active':''}><AiOutlineFileProtect/></a>
            <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active':''}><AiOutlineMessage/></a>
       </nav>
    )
}

export default Nav;