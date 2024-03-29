import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import CadastrarEmail from './Login/CadastrarEmail';

import styles from './BoasVindas.module.css';

export default BoasVindas = () => {
    const user = useTracker(() => Meteor.user());
    const [mostrarPopUp, setMostrarPopUp] = useState(false);
    const navigate = useNavigate();



    const logout = () => {
        Meteor.logout();
        toast.success('Volte sempre :)');
        navigate('/'); // Redireciona para a página inicial após o logout

    }

    const abrirPopUpEmail = () => {
        setMostrarPopUp(true);
    }

    const fecharPopUpEmail = () => {
        setMostrarPopUp(false);
    }


    const newEmail = (email) => {
        alert('Tamo aí na atividade!');

        Meteor.call('cadastrarEmail', email, (error) => {
            if(error) {
                console.log('Erro ao cadastrar o email: ', error);
                toast.error(String(error));
            } else {
                console.log('Email cadastrado com sucesso!');
                toast.success('Email cadastrado com Sucesso!!!');
                fecharPopUpEmail();
            }
        });
    }
        




    return (

        <div className="container-fluid">
            <div className="row">

                <div className="mainBoasVindas col-sm-6">
                    <div className="row">
                        <h1>Olá {user.username || user.profile.name} Seja Bem-Vindo ao To Do List</h1>
                    </div>

                    {mostrarPopUp &&
                        <CadastrarEmail  handleClose={fecharPopUpEmail}  submitEmail={newEmail} />
                    }
                   

                    <div className="areaCards">
                        <div className="row">
                            <div className="col-6">
                                <div className="card1 m-1">Conteúdo</div>
                            </div>
                            <div className="col-6">
                                <div className="card2 m-1">Conteúdo</div>
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-6">
                                <div className="card3 m-1">Conteúdo</div>
                            </div>
                            <div className="col-6">
                                <div className="card4 m-1"><h3>Visualizar Tarefas</h3></div>
                            </div>
                        </div>

                    </div>



                    <div className="container">
                        <div className="row">

                            <div className="areaEmailBtnRec">
                                <div className="col-sm-6 areaEmailBtnRec2" >
                                    <button className="btn btn-lg btn-primary d-none d-sm-block btnEmailRec" onClick={() => abrirPopUpEmail()}>
                                        <abbr className="text-decoration-none" title="Caso esqueça sua senha você poderá entrar novamente utilizando seu email">Adicione seu email de recuperação</abbr>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="areaEmailBtnRec">
                                <div className="col-sm-6 areaEmailBtnRec">
                                    <button className="btn btn-sm btn-primary d-block d-sm-none btnEmailRec" onClick={() => abrirPopUpEmail()}> <abbr className="text-decoration-none" title="Caso esqueça sua senha você poderá entrar novamente utilizando seu email">Adicione seu email de recuperação</abbr></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="areaButtonsBoasVindas">
                        <div className="areaBtnSair"><button onClick={() => logout()} className="btnSair">Sair</button></div>
                    </div>

                </div> {/* Boas Vindas*/}

            </div>
        </div>

    )
}