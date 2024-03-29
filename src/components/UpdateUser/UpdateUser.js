import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [id])

    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const updatedUser = { name, email };

        // send data to the server
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data);
                alert('User update successfully!!');
                event.target.reset();
            })
    }

    return (
        <div>
            <h2>Updating User: {id}</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <form onSubmit={handleUpdateUser}
                style={{ backgroundColor: 'pink', padding: '20px', width: '50%', margin: 'auto' }}>
                <input type="text" name="name" id="" placeholder='Name' required />
                <br />
                <input type="email" name="email" id="" placeholder='Email' required />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;