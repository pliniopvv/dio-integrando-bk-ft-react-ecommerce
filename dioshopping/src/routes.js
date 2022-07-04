import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Contatos from './Pages/contato';
import AngularFramework from './Pages/angular'

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/contato"
                element={<Contatos />}
            />
            <Route
                path="/angular"
                element={<AngularFramework />}
            />
        </Routes>
    )
}

export default MainRoutes;
