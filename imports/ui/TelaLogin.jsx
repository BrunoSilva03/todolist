import React, { useState } from 'react';

import styles from './TelaLogin.module.css';



export default TelaLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="main">
                <h1>Bem vindo ao todo list</h1>
            <div className="cardLogin">
                <form >
                    
                    <div className="areaInputs">
                        <input
                            type="text"
                            placeholder="User name"
                            name="username"
                            required
                            onChange={e => setUsername(e.target.value)}
                        />
                        <br/>
                        
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
                </form>
            </div>
        </div>
    )
}