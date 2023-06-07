import React from 'react';
import './userDashboard.css';
import UserCard from '../components/userCard/UserCard';

const UserDashboard = () => {
  return (
    <div className='user-dashboard'>
      <UserCard />
      <button>Faire une demande</button>
    </div>
  );
};

export default UserDashboard;
