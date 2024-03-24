import { useParams } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import React, { useEffect, useNavigate } from 'react';
import { toast } from 'react-toastify';


export default ConfirmarEmail = () => {
    const { email } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //Verifique o email usando o Meteor
        Meteor.call('verificarEmail', email, (error, result) => {
            if(error) {
                console.log('Erro ao cadastrar o email: ', error);
                toast.warn(String(error));
            } else {
                if(result) {
                    console.log('Email confirmado com sucesso!');
                    toast.success('Email confirmado com sucesso!');
                    navigate('/');
                    //Redireciona para a página inicial
                } else {
                    toast.error('Email não encontrado ou já confirmado.');
                    //Redirecionar para a página de erro de confirmação de email
                }
            }
        });
    }, [email]);

    return(
        <div>
            <h1>Confirmação de email Teste</h1>
            
        </div>
    );
};