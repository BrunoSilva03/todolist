import React from 'react';
import { Meteor } from 'meteor/meteor';
import { FaGithub } from 'react-icons/fa';

import styles from './LoginWithGithub.module.css';

export const LoginWithGithub = () => {
    const handleGithubLogin = () => {
        Meteor.loginWithGithub({
            requestPermissions: ['user'],
            loginStyle: 'popup',
        });
    };

    return (
        <button type="button" className="GithubButton" onClick={handleGithubLogin}>

            Login with Github
            < FaGithub className="iconGithub" />

        </button>
    )
}