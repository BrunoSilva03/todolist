import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { toast } from 'react-toastify';


export default RecuperarSenha = () => {
    const [email, setEmail] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     Accounts.forgotPassword({ email }, (error) => {
    //         if (error) {
    //             toast.error(String(error.reason));
    //         } else {
    //             toast.warning('email enviado, cheque sua caixa de email');
    //         }
    //     });
    // };

    const verificarEmail = (email) => {
        email.preventDefault();

        Meteor.call('verificarEmail', email, (error, result) => {
            if(error) {
                toast.error(String(error.reason));
            } else {
                if(result) { //O email está cadastrado no banco de dados
                    Accounts.forgotPassword({ email }, (error) => {
                        if(error) {
                            toast.error(String(error.reason));
                        } else {
                            toast.warning('email enviado, cheque sua caixa de email');
                        }
                    });
                } else { //email não está cadastrado
                    toast.warning('Email não cadastrado. Por favor insira um email válido');
                }
            }
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={() => setEmail(e.target.value)}
                required
            />
            <button type="submit" onClick={() => verificarEmail()}>Recuperar Senha</button>
        </form>
    )
}