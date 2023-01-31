import React from 'react';
import Typed from 'react-typed';


export default function Hero(){

    return (
        <>
        <section id="hero" className="d-flex flex-column justify-content-center ">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Steven Lawson</h1>
                
                <p>I am a <span className="typed">
                <Typed
                    strings={["Designer", "Developer", "Freelancer", "Photographer"]}
                    typeSpeed={60}
                    startDelay={1000}
                    backDelay={1000}
                    loop
                /></span></p>


                <div className="social-links">
                    <a href="#" className="twitter">    
                    </a>
                    <a href="tinyurl.com/mwa5rnk9" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.instagram.com/stevenlawsonphoto/" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/steve-r-lawson/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </section>
        </>
    )
}
