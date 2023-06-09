import React, { useState } from 'react'
import './registrationForm.css'

const RegistrationForm = () => {

    const [data, setData] = useState({
        company_name: '',
        siret:'',
        lastname:'',
        firstname:'',
        phone:'',
        email:'',
        address: {
            number:'',
            type:'',
            streetname:'',
            complement:'',
            zipcode:'',
            city
        },
        company_type:'',
        website:'',
        password:''
    });

    const handleChange = (event) => { //a completer
        const {name, value} = event.target;

        setData(()=> {

        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setData({
            company_name: '',
            siret:'',
            lastname:'',
            firstname:'',
            phone:'',
            email:'',
            address: {
                number:'',
                type:'',
                streetname:'',
                complement:'',
                zipcode:'',
                city
            },
            company_type:'',
            website:'',
            password:''
        })
    };

  return (
    <div className='registration'>
        <div className='registration-container'>
            <h3>Nouvel Utilisateur - Enregistrez-vous :</h3>
            <form className='form' onSubmit={handleSubmit}>
                <div className='formline'>
                    <div className='labels'>
                        <label htmlFor="company_name">Raison sociale :</label>
                        <input type="text" name='company_name' value={value} onChange={handleChange}/>
                    </div >
                    <div className='labels'>
                        <label htmlFor="siret">SIRET (14 chiffres) :</label>
                        <input type="text" name='siret'value={value} onChange={handleChange}/>
                    </div>
                </div>
                <div className='formline'>
                    <div className='labels'>
                        <label htmlFor="lastname">Nom :</label>
                        <input type="text" name='lastname'value={value} onChange={handleChange}/>
                    </div>
                    <div className='labels'>
                        <label htmlFor="firstname">Prénom :</label>
                        <input type="text" name='firstname'value={value} onChange={handleChange}/>
                    </div>
                </div>
                <div className='formline'>
                    <div className='labels'>
                        <label htmlFor="phone">Numéro de téléphone :</label>
                        <input type="text" name='phone'value={value} onChange={handleChange}/>
                    </div>
                    <div className='labels'>
                        <label htmlFor="email">Email :</label>
                        <input type="text" name='email'value={value} onChange={handleChange}/>
                    </div>
                </div>
                <div className='formline'>
                    <div className='labels'>
                        <label htmlFor="number">Adresse N°:</label>
                        <input type="text" name='number'value={value} onChange={handleChange}/>
                    </div>
                    <div className='labels'>
                        <label htmlFor="type">Type de voie :</label>
                        <input type="text" name='type'value={value} onChange={handleChange}/>
                    </div>
                </div>
                <div className='formline'>
                    <div className='streetname'>
                        <label htmlFor="streetname">Nom de la rue :</label>
                        <input type="text" name='streetname'value={value} onChange={handleChange}/>
                    </div>
                    <div className='complement'>
                        <label htmlFor="complement">Complément d'adresse</label>
                        <input type="text" name='complement'value={value} onChange={handleChange}/>
                    </div>
                </div>
                <div className='formline'>
                    <div className='labels'>
                        <label htmlFor="zipcode">Code Postal :</label>
                        <input type="text" name='zipcode' value={value} onChange={handleChange}/>
                    </div>
                    <div className='labels'>
                        <label htmlFor="city">Ville :</label>
                        <input type="text" name='city'value={value} onChange={handleChange}/>
                    </div>
                </div>
                <div className='labels'>
                    <label htmlFor="company_type">Type d'entreprise :</label>
                    <input type="text" name='company_type' value={value} onChange={handleChange}/>
                </div>
                <div className='labels'>
                    <label htmlFor="website">Site Web de l'entreprise :</label>
                    <input type="text" name='website' value={value} onChange={handleChange}/>
                </div>
                <div className='labels'>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="text" name='password' value={value} onChange={handleChange}/>
                </div>
            </form>
        </div>
        <button className='button'>Créer un compte</button>
    </div>
  )
}

export default RegistrationForm