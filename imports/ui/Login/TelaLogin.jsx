import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';

import styles from './TelaLogin.module.css';

import { LoginWithGithub } from './LoginWithGithub';
import { LoginWithGoogle } from './LoginWithGoogle';



export default TelaLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = e => {
        e.preventDefault();

        Meteor.loginWithPassword(username, password);
    }

    const register = e => {
        e.preventDefault();
        alert('Entrou no register');

        //Meteor.resgisterWithPassword(username, password);
       Accounts.createUser(username, password);
       
       if(!err) {
        return true;
       } else {
        return false;
       }
    }

    const recoverPassword = e => {
        e.preventDefault();
        alert('entrou no recoverPassword');
    }


    return (
        <div className="main">

                <h1>Bem vindo ao To Do list</h1>

            <div className="cardLogin">

                <form onSubmit={submit}>
                    
                    <div className="areaInputs">
                        <input
                            type="text"
                            placeholder="User name"
                            name="username"
                            required
                            autoComplete="off"
                            onChange={e => setUsername(e.target.value)}
                        />
                        
                        
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    

                    <div className="areaButtons">
                        <button>Entrar</button>
                        <span className="spanCadastrar"><a href="#" onClick={register} className="cadastrar">Cadastrar</a></span>
                        <span><a href="#" onClick={recoverPassword} className="recuperarSenha">Recuperar senha</a></span>
                    </div>
                    
                        <h3>OU</h3>
                    <div className="otherLoginArea">
                        
                        <LoginWithGithub />
                        <LoginWithGoogle />
                    </div>
                </form>
            </div>
        </div>
    )
}