import React from 'react';
import { NavLink } from 'react-router-dom';

const TopBar = () => {
  // Logic to determine app context based on current route

  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="row py-2">
          <div className="col-6">Your Name</div>
          <div className="col-6 text-right">
            App Context: 
            {/* Logic to display appropriate context */}
            <NavLink to="/users" className="mx-2" activeClassName="active">User List</NavLink>
            <NavLink to="/photos/:userId" className="mx-2" activeClassName="active">Photos of User</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;