import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className=" footer-container bg-dark">
            <div className="container">
                <div className="row p-5">
                    <div className="col-md-4">
                        <h3 className="text-warning">Tour-17</h3>
                        <p>This is a trusted website. Our service is very good. Our guide is more friendly. Travelers will always be satisfied. And we serve a good quality meal. Overall our packages is the best choice for all travelers. Anyone can choose any package.</p>
                        <i className="fab fa-facebook-f text-warning  fs-3"></i>
                        <i className="fab fa-instagram text-warning ms-5 fs-3"></i>
                        <i className="fab fa-twitter text-warning ms-5 fs-3"></i>
                        <i className="fab fa-whatsapp text-warning ms-5 fs-3"></i>
                    </div>
                    <div className="col-md-4">
                        <h3 className="text-warning">Our services</h3>
                        <p>Contact Us<br />
                            About Us<br />
                            Procedures<br />
                            Special offers<br />
                            Our Blogs<br />
                            Package<br />
                            Destinations</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="text-warning">Contact Us</h3>
                        <p>
                            +8801627167955 <br />
                            +8801627167955
                        </p>
                        <p>roycse17@gmail.com <br />
                            support@example.com</p>

                        <p>Bangladesh</p>
                    </div>
                    <hr />
                    <center>Copyright 2021 <span className="text-warning">Tour-71</span> | Design By <span className="text-warning">Shanto Roy</span></center>
                </div>

            </div>
        </div>
    );
};

export default Footer;