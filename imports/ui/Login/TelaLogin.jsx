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

        Accounts.createUser(username, password);
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
                        <span>Cadastrar</span>
                        <span>Recuperar senha</span>
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