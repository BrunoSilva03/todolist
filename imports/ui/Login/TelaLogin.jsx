import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { useNavigate } from 'react-router-dom';


import styles from './TelaLogin.module.css';

import { LoginWithGithub } from './LoginWithGithub';
import { LoginWithGoogle } from './LoginWithGoogle';



export default TelaLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault();

        Meteor.loginWithPassword(username, password, (error) => {
            if(error) {
                console.log(error.reason);
            } else {
                console.log('Login realizado com sucesso!');
                
            }
        });
    }

    const register = e => {
        e.preventDefault();
        
        //Chamada para criar o usuário
        Accounts.createUser({ username, password }, (error) => {
            if(error) {
                console.log(error.reason); //Mostra o motivo do erro
            } else {
                console.log('Usuário criado com sucesso!');
                navigate('/'); //Redireciona para a página inicial
                
            }
        })
    }

    const recoverPassword = e => {
        e.preventDefault();
        alert('entrou no recoverPassword');
    }


    return (
        <>
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
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        
                        
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            autoComplete="off"
                            value={password}
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
                        <>Quando publicar lembrar de alterar o URIs de redirecionamento autorizados no Google console</>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}