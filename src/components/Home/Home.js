import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  const handleDeleteUser = id => {
    const proceed = window.confirm('Are you sure you want to delete?')
    if (proceed) {
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const remaining = users.filter(user => user._id !== id);
            setUsers(remaining);
          }
        })
    }
  }

  return (
    <div>
      <h1>Users: {users.length}</h1>
      <div>
        {
          users.map(user => <User
            key={user._id}
            user={user}
            handleDeleteUser={handleDeleteUser}
          ></User>)
        }
      </div>
    </div>
  );
};

export default Home; <h1>This is home page</h1>