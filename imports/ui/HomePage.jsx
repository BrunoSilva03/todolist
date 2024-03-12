import { Meteor } from 'meteor/meteor';
import React, { useState, Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import TelaLogin from './Login/TelaLogin';
import  BoasVindas  from './BoasVindas';

export default HomePage = () => {
    const user = useTracker(() => Meteor.user());
    const navigate = useNavigate;


    

    return (
        <>
            <div className="main">
                {user ? (
                    <Fragment>
                       <BoasVindas />
                    </Fragment>
                ) : (
                    < TelaLogin />
                )}
            </div>

        </>
    )
}