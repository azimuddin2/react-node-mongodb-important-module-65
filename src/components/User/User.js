import React from 'react';
import { Link } from "react-router-dom";

const User = ({ user, handleDeleteUser }) => {
    const { _id, name, email } = user;

    return (
        <div style={{ border: '2px solid orange', padding: '20px', margin: '20px', borderRadius: '20px' }}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <button onClick={() => handleDeleteUser(_id)}>Delete</button>
            <Link to={`/update/${_id}`}>
                <button>Update</button>
            </Link>
        </div>
    );
};

export default User;