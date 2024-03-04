import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PaginaInicial from './ui/PaginaInicial';

 export const RoutesApp = () => {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<PaginaInicial />} />
            </Routes>
        </>
    )
}

