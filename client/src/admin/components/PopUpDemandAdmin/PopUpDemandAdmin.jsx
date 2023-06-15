// PopUpDemandAdmin.jsx
import React from 'react';
import './PopUpDemandAdmin.css';

const PopupDemandAdmin = ({ demande, handleValider, handleRejeter }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Traitement de la demande</h3>
        <p>
          Êtes-vous sûr de vouloir traiter la demande {demande.id} ?
        </p>
        <button onClick={handleValider}>Valider</button>
        <button onClick={handleRejeter}>Rejeter</button>
       
      </div>
    </div>
  );
};

export default PopupDemandAdmin;
