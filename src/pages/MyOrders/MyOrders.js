import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://bloodcurdling-corpse-74480.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    let myAllOrders = orders.filter(order => order.email === user.email);


    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://bloodcurdling-corpse-74480.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        // const remainingUsers = orders.filter(order => order.email === user.email);
                        // console.log(remainingUsers)
                        // setOrders(remainingUsers);
                    }
                })
        }
    }

    return (
        <div className="container ">
            <h1 className="text-primary mt-5 fw-bold">My Orders {myAllOrders?.length}</h1>
            <div className="row">
                {
                    myAllOrders.map(order =>
                        <div className="col-md-4 pb-2" key={order._id}>
                            <div className="card h-100">
                                <div className="card-header">
                                    <img src={order.img} alt="" className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{order.name}</h5>
                                    <p className="card-text">Price: ${order.price}</p>
                                    <p className="card-text">5 Days/6 night</p>
                                    <p className="card-text">{order.description}</p>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h3 className="bg-warning">{order.status}</h3>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn btn-warning" onClick={() => handleDeleteUser(order._id)}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div >
    );
};

export default MyOrders;