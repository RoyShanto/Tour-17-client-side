import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
// import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://bloodcurdling-corpse-74480.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className=" my-3">
            <h1 className="text-primary mt-5 fw-bold">Our Services</h1><br />
            <div className="container">

                <div className="row">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;