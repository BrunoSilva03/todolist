import { Meteor } from 'meteor/meteor';
import React, { useState, Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate } from 'react-router-dom'; 
import  TelaLogin  from './Login/TelaLogin';
import { Redirect } from 'react-router-dom';

export default HomePage = () => {
    const user = useTracker(() => Meteor.user());
    const navigate = useNavigate; 

    const logout = () => {
        Meteor.logout();
        navigate('/'); //Redireciona para a página inicial após o logout
    }

    if(user) {
        console.log('USUÁRIO ESTÁ LOGADO');
    } else {
        console.log('USUÁRIO NÃO ESTÁ LOGADO NÃO!!!');
    }

    return (
        <>
        <div className="main">
        {user ? (
            <Fragment>
               <div className="user" onClick={logout}>
                {user.username || user.profile.name}
                <h1>Você entrou na bagaça!</h1>
                <button onClick={logout}>Deslogar</button>
               </div>
            </Fragment>
        ) : (
            < TelaLogin />
        )}
        </div>
            
        </>
    )
}