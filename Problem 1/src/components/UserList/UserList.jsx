import React from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const users = [
    {
      _id: 1,
      first_name: "John",
      last_name: "Doe",
      location: "New York",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      occupation: "Software Engineer"
    },
    {
      _id: 2,
      first_name: "Jane",
      last_name: "Doe",
      location: "Los Angeles",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      occupation: "Web Developer"
    },
  ];

  return (
    <div className="container">
      <h2>User List</h2>
      <div className="row" style={{ marginLeft: '100px' }}>
        {users.map(user => (
          <div key={user._id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                <p className="card-text">Location: {user.location}</p>
                <p className="card-text">Occupation: {user.occupation}</p>
                <Link to={`/userdetail/${user._id}`} className="btn btn-primary">View Details</Link>
                <p>    </p>
                <Link to={`/userphoto/${user._id}`} className="btn btn-primary">images</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;