import React from 'react';

export default function Certifications(){
    return (
        <>
        <section id="services" className="services">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Certifications</h2>
                </div>

                <div className="row">

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        
                        <div className="icon-box iconbox-blue">
                            <div className="icon">
                                <img id="icon-img" src="assets/img/cisco-img.png" alt="Cisco CCNA" />
                            </div>

                            <h4><a href="https://www.sample.com/">Cisco Certified Network Associate (CCNA)</a></h4>
                            <p>A CCNA certification certifies a technician's ability to install, set up, configure, troubleshoot and operate a medium-sized routed and switched computer network.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box iconbox-orange ">
                        <div className="icon">
                            <img id="icon-img" src="assets/img/itil4-img.png" alt="ITIL v4" />
                        </div>
                        <h4><a href="https://www.sample.com/">ITIL 4 Foundation</a></h4>
                        <p>ITIL 4 is an adaptable framework for managing services within the digital era using best practice modules to optimize digital technologies to co-create value with consumers, drive business strategy, and embrace digital transformation.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box iconbox-pink">
                        <div className="icon">
                            <img id="icon-img" src="assets/img/mta-img.png" alt="Microsoft Technical Associate" />
                        </div>
                        <h4><a href="https://www.sample.com/">Microsoft Technical Associate (MTA)</a></h4>
                        <p>Microsoft Technology Associate (MTA) certification is the name of a suite of entry-level certifications offered by Microsoft that provides fundamental core technology knowledge needed to begin a career in technology.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}
