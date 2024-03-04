import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PaginaInicial from './ui/PaginaInicial';
import TelaLogin from './ui/TelaLogin';

 export const RoutesApp = () => {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<TelaLogin />} />
            </Routes>
        </>
    )
}

