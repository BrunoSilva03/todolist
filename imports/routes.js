import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import HomePage from './ui/HomePage';
import RecuperarSenha from './ui/Login/RecuperarSenha';
import ConfirmarEmail from './ui/Login/ConfirmarEmail';


export const RoutesApp = () => {
   
    return (
        <>
            <Routes>
                <Route exact path="/" element={<HomePage />} />

                <Route path="/confirmar-email/:email" element={<ConfirmarEmail />} />

                <Route path="/recuperar-senha" element={<RecuperarSenha />}/>
            </Routes>
        </>
    )
}



