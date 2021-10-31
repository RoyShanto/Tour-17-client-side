import React from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import Travellers from '../../Travellers/Travellers/Travellers';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {

    return (
        <div>
            {/* <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> */}

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://i.ibb.co/KzVRD2M/slider5.jpg/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="slider-title">Amazing Tour In Italy</h1>
                        <h4 className="slider-body">TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER DON'T MISS THIS OPPORTUNITY FOR YOUR BUSINESS.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://i.ibb.co/MMc7VYj/slider1.jpg/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="slider-title">Amazing Tour In Paris</h1>
                        <h4 className="slider-body">TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER DON'T MISS THIS OPPORTUNITY FOR YOUR BUSINESS.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://i.ibb.co/4RDFCkH/slider4.jpg/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="slider-title">Amazing Tour In France</h1>
                        <h4 className="slider-body">TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER DON'T MISS THIS OPPORTUNITY FOR YOUR BUSINESS.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Services />

            <div className="travel-with-tour">
                <h1 className="text-primary fw-bold mt-5">Why You Are Travel With<br /> Tour</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="mx-2 about p-2 border">
                                <i className="fas fa-user-injured icon"></i><br />
                                <h3>2000+ Our worldwide guide</h3>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mx-2 about p-2 border">
                                <i className="far fa-handshake icon"></i><br />
                                <h3>100% trusted travel agency</h3>
                            </div>
                        </div>
                        <div className="col-md-3  ">
                            <div className="mx-2 about p-2 border">
                                <i className="fas fa-users icon"></i><br />
                                <h3>10+ year of travel experience</h3>
                            </div>
                        </div>
                        <div className="col-md-3  ">
                            <div className="mx-2 about p-2 border">
                                <i className="fas fa-child icon"></i><br />
                                <h3>90% of our traveller happy</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Travellers />
        </div>
    );
};

export default Home;