import React, { useRef } from 'react';
// import './AddService.css';

const AddService = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imgRef = useRef();
    const AddUser = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;
        const newUser = { name, price, description, img };
        console.log(newUser);
        fetch('https://bloodcurdling-corpse-74480.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the user. ')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="add-service my-3 d-flex justify-content-center align-items-center">
            {/* <div className="border border-3 border-info p-3 pb-4 w-50 add-service-border"> */}
            <div className="w-75 border p-md-5 p-2">

                <h1>Add User</h1>
                {/* <form onSubmit={AddUser}>
                    <input type="text" className="form-control" ref={nameRef} placeholder="Name" /><br />
                    <input type="number" ref={priceRef} placeholder="Price" /><br />
                    <textarea type="text" ref={descriptionRef} placeholder="Description" /><br />
                    <input type="text" ref={imgRef} placeholder="Image Link" /><br />
                    <input type="submit" value="Add" />
                </form> */}
                <form onSubmit={AddUser}>
                    <div class="mb-3">
                        <input type="text" class="form-control" ref={nameRef} placeholder="Name" />
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" ref={priceRef} placeholder="Price" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" ref={descriptionRef} placeholder="Description" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" ref={imgRef} placeholder="Image Link" />
                    </div>
                    <div className="d-flex justify-content-start">
                        <button type="submit" className="btn btn-primary">Add Service</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;