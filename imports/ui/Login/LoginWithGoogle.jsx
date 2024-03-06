import React from 'react';
import { Meteor } from 'meteor/meteor';
import { FaGoogle } from 'react-icons/fa';

import styles from './LoginButtons.module.css';

export const LoginWithGoogle = () => {

    const handleGoogleLogin = () => {
        Meteor.loginWithGoogle(err => {
            if(!err) alert('Logado com Sucesso!');

            else alert(err.reason || 'Unknown Error');
        });
    };

    const simulaHover = () => {
        document.querySelector('.login').style.color = "white";
        document.querySelector('.com').style.color = 'white';
        document.querySelector('.Google').style.color = "white";
        document.querySelector('.iconGoogle').style.color = "yellow";
    }

    const simulaHoverSaiDoButton = () => {
        document.querySelector('.login').style.color = "rgb(229, 229, 4)";
        document.querySelector('.com').style.color = "green";
        document.querySelector('.Google').style.color = "blue";
        document.querySelector('.iconGoogle').style.color = "red";
    }

    return (
        <button type="button" className="GoogleButton" onClick={handleGoogleLogin} onMouseOver={simulaHover} onMouseOut={simulaHoverSaiDoButton}>
            <span><span style={{color: "rgb(229, 229, 4)"}} className="login">Login</span> <span style={{color: "green"}} className="com">com</span> <span style={{color: "blue"}} className="Google">Google</span></span>
            <FaGoogle style={{color: "red"}} className="iconGoogle"/>
        </button>
    )
}