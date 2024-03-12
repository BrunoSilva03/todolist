import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './BoasVindas.module.css';

export default BoasVindas = () => {
    const user = useTracker(() => Meteor.user());
    const navigate = useNavigate();


    const logout = () => {
        Meteor.logout();
        toast.success('Até breve :)');
        navigate('/'); // Redireciona para a página inicial após o logout
        
    }

    return (
        <div className="user" onClick={logout}>
            {user.username || user.profile.name}
            <h1>Olá {user.username} Você entrou na bagaça! Tá Ok!?</h1>
            <button onClick={() => logout}>Deslogar</button>
        </div>
    )
}