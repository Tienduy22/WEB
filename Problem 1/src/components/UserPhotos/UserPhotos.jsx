import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UserPhotos = () => {
  const { userId } = useParams();
  const photos = [
    {
        _id: 1,
        user_id: 1,
        date_time: "2024-04-06T12:00:00Z",
        file_name: "photo1.jpg",
        comments: [
          {
            _id: 1,
            photo_id: 1,
            user: { _id: 2, first_name: "Jane", last_name: "Doe" },
            date_time: "2024-04-06T12:05:00Z",
            comment: "Nice photo!"
          },
          // Add more comments as needed
        ]
      },
      {
        _id: 2,
        user_id: 2,
        date_time: "2024-04-06T13:00:00Z",
        file_name: "photo2.jpg",
        comments: [
          {
            _id: 2,
            photo_id: 2,
            user: { _id: 1, first_name: "John", last_name: "Doe" },
            date_time: "2024-04-06T13:05:00Z",
            comment: "Great shot!"
          },
          // Add more comments as needed
        ]
      },
  ]

  return (
    <div className="container" style={{ marginLeft: '100px' }}>
      <h2>User Photos</h2>
      {photos.map(photo => (
        <div key={photo._id}  className="card mb-3" >
          <img src={`/images/${photo.file_name}`} className="card-img-top" alt={photo.file_name} />
          <div className="card-body">
            <p className="card-text">Date/Time: {new Date(photo.date_time).toLocaleString()}</p>
            <p className="card-text">Comments:</p>
            <ul className="list-group">
              {photo.comments.map(comment => (
                <li key={comment._id} className="list-group-item">
                  <p>Date/Time: {new Date(comment.date_time).toLocaleString()}</p>
                  <p>User: <Link to={`/users/${comment.user._id}`}>{`${comment.user.first_name} ${comment.user.last_name}`}</Link></p>
                  <p>Comment: {comment.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPhotos;