import React, { useState } from 'react';
import './modalConnection.css';

const ModalConnection = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // TODO: Submit the login form to the server
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>&times;</button>
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nom d'utilisateur:
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
          </label>
          <label>
            Mot de passe:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default ModalConnection;
