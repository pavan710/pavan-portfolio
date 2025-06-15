import React, { useEffect, useState } from "react"
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/leetcode.svg';
import navIcon3 from '../assets/img/github.svg';
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar() {
  const [activelink,setactivelink]=useState('home');
  const[scrolled,setscrolled]=useState(false);
  useEffect(()=>{
    const onScroll=()=>{
      if(window.scrollY>50){
        setscrolled(true);
      }
      else{
        setscrolled(false);
      }
    }
    window.addEventListener('scroll',onScroll);

    return ()=>window.removeEventListener('scroll',onScroll);

  },[])


  const onUpdateActiveLink=(value)=>{
    setactivelink(value);
  }
  return (
    <div>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
           
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activelink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activelink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="https://leetcode.com/u/pavan710/"><img src={navIcon2} alt="" /></a>
                <a href="https://github.com/pavan710/"><img src={navIcon3} alt="" /></a>
              </div>
            
                <button className="vvd"><span>Let’s Connect</span></button>
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;