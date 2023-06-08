import React from 'react';
import './userDashboard.css';
import UserCard from '../components/userCard/UserCard';
import Footer from '../components/footer/Footer';

const UserDashboard = () => {
  return (
    <div className='user-dashboard'>
      <UserCard />
      <div className='my-steps'>
        Mes demandes en cours
        <hr />
        <table>
          <thead>
            <tr>
              <th>Numéro de demande</th>
              <th>Date</th>
              <th>Label</th>
              <th>Avancement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5776537900</td>
              <td>07/06/2023</td>
              <td>AOP</td>
              <td>En cours</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='my-labels'>
        Mes labels
        <hr />
      </div>
    </div>
  );
};

export default UserDashboard;
