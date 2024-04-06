import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();

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
  const user = users.find(user => user._id === parseInt(userId));

  return (
    <div className="container" style={{ marginLeft: '100px' }}>
      <h2>User Detail</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
          <p className="card-text">Location: {user.location}</p>
          <p className="card-text">Description: {user.description}</p>
          <p className="card-text">Occupation: {user.occupation}</p>
          <Link to={`/photos/${userId}`} className="btn btn-primary">View Photos</Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;