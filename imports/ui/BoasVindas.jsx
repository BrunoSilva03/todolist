import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate, Link } from 'react-router-dom';
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

    // Accounts.onLogin(() => {
    //     //voltar para a tela inicial depois que confirmou seu email.
    //     navigate('/');
    // })

const abrirPopUpEmail = () => {
    $(function() { 
        
        $('.popupEmail').fadeIn(1000);
        $('popupEmail').css('display', 'block');
    });
}

const fecharPopUpEmail = () => {
    $(function() {
        $('.popupEmail').fadeOut(3000);
        $('.popupEmail').css('display', 'none');
    });
}
   



    return (
        <div className="mainBoasVindas">
            <h1>Olá {user.username || user.profile.name} Seja Bem-Vindo ao To Do List</h1>




            <div className="popupEmail">
                <label>Email: </label>
                <input type="email" />
                <button onClick={() => fecharPopUpEmail()}>Enviar</button>
            </div>


            <div className="areaCards">
                <div className="card1">Conteúdo</div>
                <div className="card2">Conteúdo</div>
                <div className="card3">Conteúdo</div>
                <div className="card4"><h3>Visualizar Tarefas</h3></div>
            </div>




            <div className="emailArea">

                <button className="btnEmailRec" onClick={() => abrirPopUpEmail()} ><abbr title="Caso esqueça sua senha você poderá entrar novamente utilizando seu email">Adicione seu email de recuperação</abbr></button>

            </div>

            <div className="areaButtonsBoasVindas">
                <div className="areaBtnSair"><button onClick={() => logout()} className="btnSair">Sair</button></div>
            </div>
        </div>
    )
}