import React, { useState } from 'react';
import './modalConnection.css';
import { useNavigate, Link } from 'react-router-dom';

const ModalConnection = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitEnabled, setSubmitEnabled] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '') {
      setEmailError('Veuillez saisir votre e-mail.');
      return;
    }

    if (!isValidEmail(username)) {
      setEmailError("L'e-mail saisi n'est pas valide.");
      return;
    }

    if (password === '') {
      setPasswordError('Veuillez saisir votre mot de passe.');
      return;
    }

    if (password.length < 8) {
      setPasswordError('Le mot de passe doit comporter au moins 8 caractères.');
      return;
    }

    console.log(`Username: ${username}, Password: ${password}`);
    navigate('/user'); // Naviguer vers "/user" après la soumission du formulaire
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setSubmitEnabled(e.target.value !== '' && password !== '');
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setSubmitEnabled(username !== '' && e.target.value !== '');
    setPasswordError('');
  };

  const isValidEmail = (email) => {
    // Vérification sommaire de l'e-mail
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
              onChange={handleUsernameChange}
              required
            />
          </label>
          {emailError && <p className="error-message">{emailError}</p>}
          <label>
            Saisissez votre mot de passe :
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
          {passwordError && <p className="error-message">{passwordError}</p>}
          <p className="not_sign">
            Si vous n'êtes pas encore inscrits,{' '}
            <Link to="/registration">cliquez ici</Link>
          </p>
          <button type="submit" disabled={!isSubmitEnabled}>
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalConnection;
