import React from 'react';
import './Contact.css'
const ContactUs = () => {
    return (
        <div className="container my-3">
            <h1>Contact</h1>
            <p className="text-primary fw-bold  fs-1"><i>Get a premium support now!</i></p><br /><br />
            <div className="contact-info">
                <div>
                    <hr />
                    <i className="fas fa-map-marker-alt icon"></i><br /><br />
                    <h4>Location</h4>
                    <p>Bangladesh</p>
                    <hr />
                </div>
                <div>
                    <hr />
                    <i className="fas fa-envelope icon"></i><br /><br />
                    <h4>Email</h4>
                    <p>roycse17@gmail.com</p>
                    <hr />
                </div>
                <div>
                    <hr />
                    <i className="fas fa-phone icon"></i><br /><br />
                    <h4>Phone</h4>
                    <p>+8801627167000</p>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;