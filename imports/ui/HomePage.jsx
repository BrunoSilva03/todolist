import { Meteor } from 'meteor/meteor';
import React, { useState, Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import  TelaLogin  from './TelaLogin';

export default HomePage = () => {
    const user = useTracker(() => Meteor.user());

    return (
        <>
        <div className="main">
        {user ? (
            <Fragment>

                <h1>Olá para você que está logado no site</h1>
            </Fragment>
            
        ) : (
            < TelaLogin />
        )}
        </div>
            
        </>
    )
}