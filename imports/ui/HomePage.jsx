import { Meteor } from 'meteor/meteor';
import React, { useState, Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import  TelaLogin  from './Login/TelaLogin';

export default HomePage = () => {
    const user = useTracker(() => Meteor.user());

    return (
        <>
        <div className="main">
        {user ? (
            <Fragment>

               <div className="user" onClick={logout}>
                {user.username || user.profile.name}
               </div>
            </Fragment>
            
        ) : (
            < TelaLogin />
        )}
        </div>
            
        </>
    )
}