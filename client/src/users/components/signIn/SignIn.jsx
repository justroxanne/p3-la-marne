import {useState} from 'react'
import './signIn.css'
import { Link } from 'react-router-dom'
import ModalConnection from '../modal/ModalConnection';

const SignIn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="signcontainer">
    <div className='SignInAndConnect'>
        <Link to='/registration'>
        <div className="signIn">S'inscrire</div>
        </Link>
        <span className='line'></span>
        <div className="connexion" onClick={handleOpenModal}>Connexion</div>
        <ModalConnection isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
    </div>
  )
}

export default SignIn