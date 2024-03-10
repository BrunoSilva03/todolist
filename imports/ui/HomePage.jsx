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
        navigate.push('/'); //Redireciona para a página inicial após o logout
    }

    if(user) {
        console.log('USUÁRIO ESTÁ LOGADO');
    } else {
        console.log('USUÁRIO NÃO ESTÁ LOGADO NÃO!!!');
    }

    return (
        <>
        con
        <div className="main">
        {user ? (
            <Fragment>
                {console.log('user: ' + user)};
               <div className="user" onClick={logout}>
                {user.username || user.profile.name}
                <h1>Você entrou na bagaça!</h1>
               </div>
            </Fragment>
            
        ) : (
            <>
            {console.log('user: ' + user)};
            < TelaLogin />
            </>
        )}
        </div>
            
        </>
    )
}