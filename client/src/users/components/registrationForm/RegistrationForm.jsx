import React from 'react'
import './registrationForm.css'

const RegistrationForm = () => {


  return (
    <div className='registration'>
        <div className='registration-container'>
            <h3>Nouvel Utilisateur - Enregistrez-vous :</h3>
            <form className='form' >
                <div className='formline'>
                    <div className='labels'>
                        <label htmlFor="company_name">Raison sociale :</label>
                        <input type="text" name='company_name' value={''} />
                    </div >
                    <div className='labels'>
                        <label htmlFor="siret">SIRET (14 chiffres) :</label>
                        <input type="text" name='siret'value={''}/>
                    </div>
                </div>
                <div className='formline'>
                    <div className='labels'>
                        <label htmlFor="lastname">Nom :</label>
                        <input type="text" name='lastname'value={''}/>
                    </div>
                    <div className='labels'>
                        <label htmlFor="firstname">Prénom :</label>
                        <input type="text" name='firstname'value={''}/>
                    </div>
                </div>
                <div className='formline'>
                    <div className='labels'>
                        <label htmlFor="phone">Numéro de téléphone :</label>
                        <input type="text" name='phone'value={''}/>
                    </div>
                    <div className='labels'>
                        <label htmlFor="email">Email :</label>
                        <input type="text" name='email'value={''}/>
                    </div>
                </div>
                <div className='formline'>
                    <div className='labels'>
                        <label htmlFor="number">Adresse N°:</label>
                        <input type="text" name='number'value={''}/>
                    </div>
                    <div className='labels'>
                        <label htmlFor="type">Type de voie :</label>
                        <input type="text" name='type'value={''}/>
                    </div>
                </div>
                <div className='formline'>
                    <div className='streetname'>
                        <label htmlFor="streetname">Nom de la rue :</label>
                        <input type="text" name='streetname'value={''}/>
                    </div>
                    <div className='complement'>
                        <label htmlFor="complement">Complément d'adresse</label>
                        <input type="text" name='complement'value={''}/>
                    </div>
                </div>
                <div className='formline'>
                    <div className='labels'>
                        <label htmlFor="zipcode">Code Postal :</label>
                        <input type="text" name='zipcode' value={''}/>
                    </div>
                    <div className='labels'>
                        <label htmlFor="city">Ville :</label>
                        <input type="text" name='city'value={''}/>
                    </div>
                </div>
                <div className='labels'>
                    <label htmlFor="company_type">Type d'entreprise :</label>
                    <input type="text" name='company_type' value={''}/>
                </div>
                <div className='labels'>
                    <label htmlFor="website">Site Web de l'entreprise :</label>
                    <input type="text" name='website' value={''}/>
                </div>
                <div className='labels'>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="text" name='password' value={''}/>
                </div>
            </form>
        </div>
        <button className='button'>Créer un compte</button>
    </div>
  )
}

export default RegistrationForm