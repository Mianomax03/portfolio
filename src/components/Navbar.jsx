import React,{useState} from 'react'
 import MaterialUISwitch from '../resources/MaterialUISwitch';
 import './Navbar.css'
 import{GiHamburgerMenu} from 'react-icons/gi'; 
import {AiFillCloseCircle} from'react-icons/ai'
import images from "../resources/assets/images"


const Navbar = ({toggleTheme}) => {
  const [toggleMenu,setToggleMenu]=useState(false )
 
  return (
  
    <nav className="main__container" >
      <div className="logo__container">
        <img className="logo" src={images.logo} alt="logo"></img>       
      </div>
      <div className='mode__container'> <MaterialUISwitch onChange={toggleTheme}/></div>
      <div className="links__container">
        <ul className='links'>
        <a href="#about"><li>01.About</li></a>
        <a href="#work"><li>02.Work</li></a>
          <a href='#experience'> <li>03.Experience</li></a>
          <a href="#contact"><li>04.Contact</li></a> 
        </ul>
      </div>

      <div className="app__navbar-smallscreen">
    <GiHamburgerMenu className="icon"  fontSize={27} onClick={()=> setToggleMenu(true)}/>
     {toggleMenu &&(
    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
      <AiFillCloseCircle  fontSize={27} className="overlay__close" onClick={()=> setToggleMenu(false)}/>
    
    <ul className="app__navbar-smallscreen-links">
          <a href="about"><li>01.About</li></a>
          <li>02.Work</li>
         <li> <a href='#experience'>03.Experience</a></li>
          <li>04.Contact</li>
    </ul>
    </div>
    )}

  </div>
    </nav>
  

  )
}

export default Navbar