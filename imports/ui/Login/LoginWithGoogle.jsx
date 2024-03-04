import React from 'react';
import { Meteor } from 'meteor';
import { FaGoogle } from 'react-icons/fa';

export const LoginWithGoogle = () => {

    const handleGoogleLogin = () => {
        Meteor.loginWithGoogle(err => {
            if(!err) alert('Logado com Sucesso!');

            else alert(err.reason || 'Unknown Error');
        });
    };
}