import React, { useEffect, useState } from 'react';
import Traveller from '../Traveller/Traveller';

const Travellers = () => {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch('https://bloodcurdling-corpse-74480.herokuapp.com/Travellers')
            .then(req => req.json())
            .then(data => setDepartments(data))
    }, [])
    return (
        <div className="mt-5"><br />
            <h2 className="text-primary fw-bold fs-1">Oue Traveller Say About Us</h2>
            <div className="container">
                <div className="row my-5">
                    {
                        departments.map(d => <Traveller key={d._id} department={d} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Travellers;

/*
id
:
617df84d0bef2708ad6d2e8b
name
:
"Paris Hill Tour"
description
:
"Montagne Sainte-Geneviève: 61 m (200 ft), south, around the Panthéon. ..."
img
:
"https://i.ibb.co/X3PBWhx/Paris.jpg"
price
:
"180"


*/