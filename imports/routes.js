import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import HomePage from './ui/HomePage';
import RecuperarSenha from './ui/Login/RecuperarSenha';



export const RoutesApp = () => {
   
    return (
        <>
            <Routes>
                <Route exact path="/" element={<HomePage />} />

                <Route path="/recuperar-senha" element={<RecuperarSenha />}/>
            </Routes>
        </>
    )
}



