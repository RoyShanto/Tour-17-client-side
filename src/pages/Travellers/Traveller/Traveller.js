import React from 'react';
import { Card } from 'react-bootstrap';
import './travellers.css';

const Traveller = (props) => {
    const { name, img, description } = props.department;
    return (
        <div className=" col-md-4 pb-2">
            <Card className="card h-100">
                <Card.Img variant="top" src={img} className="card-img" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Traveller;