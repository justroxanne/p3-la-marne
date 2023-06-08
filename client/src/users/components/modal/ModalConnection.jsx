import React, { useState } from 'react';
import './modalConnection.css';
import { Link } from 'react-router-dom';

const ModalConnection = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div onClick={onClose} className="button_close">
          &times;
        </div>
        <p>Accès à votre espace utilisateur</p>
        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            Saisissez votre email :
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Saisissez votre mot de passe :
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <p className="not_sign">
            Si vous n'êtes pas encore inscrits,{' '}
            <Link to="/registration">cliquez ici</Link>
          </p>
          <button type="submit"><Link to='/user'>Se connecter</Link></button>
        </form>
      </div>
    </div>
  );
};

export default ModalConnection;
