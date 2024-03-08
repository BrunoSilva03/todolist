import React from 'react';
import { Meteor } from 'meteor/meteor';
import { FaGithub } from 'react-icons/fa';

import styles from './LoginButtons.module.css';

export const LoginWithGithub = () => {
    const handleGithubLogin = () => {
        Meteor.loginWithGithub({
            requestPermissions: ['user'],
            loginStyle: 'popup',
        });
    };

    return (
        <button type="button" className="GithubButton" onClick={handleGithubLogin}>

            Login com Github
            < FaGithub className="iconGithub" />

        </button>
    )
}