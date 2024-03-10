import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import HomePage from './ui/HomePage';


export const RoutesApp = () => {
   
    //     const userLoggedIn = !!Meteor.user();
    //         Meteor.user() retorna o usuário atualmente logado, se houver. Se nenhum usuário estiver autenticado, ele retornará null.
    // Usamos !! para converter o valor retornado de Meteor.user() em um valor booleano. Se houver um usuário logado, Meteor.user() será avaliado como verdadeiro, caso contrário, será avaliado como falso.
    return (
        // <Route 
        // {...rest}
        // render={(props) =>
        //     userLoggedIn ? (
        //         <Component {...props} />
        //     ) : (
        //         <Redirect to="/" />
        //     )}
        // />


        <>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </>
    )
}



