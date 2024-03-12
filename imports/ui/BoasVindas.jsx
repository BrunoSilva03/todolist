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
        toast.success('Volte sempre :)');
        navigate('/'); // Redireciona para a página inicial após o logout
        
    }

    return (
        <div className="mainBoasVindas">
            <h1>Olá {user.username || user.profile.name} Seja Bem-Vindo ao To Do List</h1>

            <div className="areaCards">
                <div className="card1">Conteúdo</div>
                <div className="card2">Conteúdo</div>
                <div className="card3">Conteúdo</div>
                <div className="card4">Conteúdo</div>
            </div>

           <div className="emailArea">
            <button className="btnEmailRec">Adicione seu email de recuperação</button>
            <span>Caso esqueça sua senha você poderá entrar novamente utilizando seu email</span>
           </div>

            <div className="areaBtnSair"><button onClick={() => logout()} className="btnSair">Sair</button></div>
        </div>
    )
}