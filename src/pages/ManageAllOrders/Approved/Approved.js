import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Approved = () => {
    const [order, setOrder] = useState({});
    const { orderId } = useParams();
    useEffect(() => {
        const url = `https://bloodcurdling-corpse-74480.herokuapp.com/orders/${orderId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [orderId])
    order.status = 'Approved';
    console.log(order);

    const handleUpdateOrder = e => {
        const url = `https://bloodcurdling-corpse-74480.herokuapp.com/orders/${orderId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Updated Successfully.')
                    // setOrder({});
                }
            })
        e.preventDefault();
    }
    return (
        <div className="my-3">
            <form onSubmit={handleUpdateOrder}>
                <h1>Approved The Order</h1>
                <input className="btn btn-warning" type="submit" value="Approved" />
            </form>
        </div>
    );
};

export default Approved;