import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import HomePage from './ui/HomePage';


export const RoutesApp = () => {
   
    return (
        <>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </>
    )
}



