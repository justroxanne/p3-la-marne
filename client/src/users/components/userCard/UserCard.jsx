import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import Leia from '../../assets/userprofile.png';
import './userCard.css';

const UserCard = () => {
  return (
    <>
      <div className='usercard'>
        <img
          src={Leia}
          className='profile-picture'
          alt='user profile picture'
        />
        <div className='user-infos'>
          <h3>Ma super société</h3>
          <br />
          <span>23 rue du Temple</span>
          <span>12345 Quelquepart</span>
          <span>monadresse@mail.fr</span>
          <span>01 02 03 04 05</span>
        </div>
        <AiOutlineEdit
          style={{ width: '1.5em', height: '1.5em' }}
          className='edit-infos'
        />
      </div>
      <button className='new-step-btn'>Faire une demande</button>
    </>
  );
};

export default UserCard;
