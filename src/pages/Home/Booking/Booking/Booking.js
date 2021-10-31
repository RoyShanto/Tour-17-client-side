import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Booking = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const addressRef = useRef();

    useEffect(() => {
        fetch(`https://bloodcurdling-corpse-74480.herokuapp.com/users/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId])

    const { _id, name, price, description, img } = service;
    const product_id = _id;
    const email = user.email;
    // const address = addressRef.current.value || '';
    // const newOrder = { email, name, price, description, img, address, product_id };


    const handleOrder = (e) => {
        const status = 'Pending';
        const address = addressRef.current.value || '';
        const newOrder = { email, name, price, description, img, address, status, product_id };
        fetch('https://bloodcurdling-corpse-74480.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the Order.')
                }
            })
        e.preventDefault();
    }




    return (
        <div className="container py-5 mt-5">
            <form onSubmit={handleOrder}>
                <div className="row p-2 border border-danger" >
                    <div className="col-md-6">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="pt-5">
                            <h2 className="fw-bold">{name}</h2>
                            <h3>Price: {price}</h3>
                            <p>Description: {description}</p>
                            <input type="text" placeholder="Enter Your Address" ref={addressRef} required /><br /><br />
                            <button type="submit" className="bg-warning py-2 px-5 border rounded fw-bold" >Book</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        // <div>
        //     <h2>Details Of: {service.name}</h2>
        //     <h2>this is booking: {serviceId}</h2>
        // </div>
    );
};

export default Booking;