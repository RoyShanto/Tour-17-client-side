import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><b>Tour-71</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addService" className="nav-link">Add Service</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    user.email ?
                                        <Link to="/myOrders" className="nav-link" >My Orders</Link>
                                        :
                                        <Link></Link>
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    user.email ?
                                        <Link to="/manageAllOrders" className="nav-link" >Manage All Orders</Link>
                                        :
                                        <Link></Link>
                                }
                            </li>
                            <li className="nav-item">
                                <Link to="/contactUs" className="nav-link">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    user.email ?
                                        <Link to="/login" className="nav-link" onClick={logOut}>LogOut</Link>
                                        :
                                        <Link className="nav-link" to="/login">Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav><br /><br />
        </div>
    );
};

export default Header;