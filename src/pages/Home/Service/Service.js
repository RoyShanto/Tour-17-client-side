import React from 'react';
// import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <div className="col-md-4 pb-2">
            <div className="card h-100">
                <div className="card-header">
                    <img src={img} alt="" className="img-fluid" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: ${price}</p>
                    <p className="card-text">5 Days/6 night</p>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/users/${_id}`}>
                        <button className="btn btn-warning">Book {name.toLowerCase()}</button>
                    </Link>
                </div>
                {/* <img src={img} alt="" />
            <h3>{name}</h3><br />

            <div className="row text-primary">
                <div className="col-md-6"><h5>Price: ${price}</h5></div>
                <div className="col-md-6"><h5>5 Days/6 night</h5></div>
            </div>

            <p className="px-3">{description}</p>
            <Link to={`/users/${_id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link> */}
            </div>
        </div>
    );
};

export default Service;