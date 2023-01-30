import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faUser, faFile, faBookOpen, faServer } from '@fortawesome/free-solid-svg-icons'


export default function Header(){ 
    
    const navlink = () => {  
        let links = document.querySelectorAll('#navbar .scrollto')
        let position = window.scrollY + 200
        links.forEach((link) => { 
            if(!link) {
                return
            }
            let section = document.querySelector(link.hash)
            if(!section) {
                return
            }
            if(position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)){
                link.classList.add('active')
            } else {
                link.classList.remove('active')
            }
         })
        
    }

    window.addEventListener('scroll', () => { 
        navlink()
    })

    
    
    return (
        <>
        
        <header id="header" className="d-flex flex-column justify-content-center">
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li>
                        <a href="#hero" className="nav-link scrollto active" >
                            <i className=""><FontAwesomeIcon icon={faHouse} /></i> 
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="nav-link scrollto">
                            <i className=""><FontAwesomeIcon icon={faUser} /></i>
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#resume" className="nav-link scrollto">
                            <i className=""><FontAwesomeIcon icon={faFile} /></i>
                            <span>Resume</span>
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="nav-link scrollto">
                            <i className=""><FontAwesomeIcon icon={faBookOpen} /></i> <span>Portfolio</span>
                            </a>
                    </li>
                    <li>
                        <a href="#services" className="nav-link scrollto">
                            <i className=""><FontAwesomeIcon icon={faServer} /></i>
                            <span>Services</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link scrollto">
                            <i className=""><FontAwesomeIcon icon={faEnvelope} /></i>
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    
        </>
    )
}
