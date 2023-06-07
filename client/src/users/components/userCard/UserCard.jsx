import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import './userCard.css';

const UserCard = () => {
  return (
    <div className='usercard'>
      <div className='user-infos'>
        <p>
          <h3>Ma super société</h3>
          <br />
          <span>23 rue du Temple</span>
          <span>12345 Quelquepart</span>
          <span>monadresse@mail.fr</span>
          <span>01 02 03 04 05</span>
        </p>
        <AiOutlineEdit style={{ width: '1.5em', height: '1.5em' }} />
      </div>
    </div>
  );
};

export default UserCard;
