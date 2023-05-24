import React from 'react';
import StorePicker from './StorePicker.jsx';
import NotFound from "./NotFound.jsx";
import App from "../App.js";
import Auth from "./Auth.jsx";
import LoginPage from "./LoginPage.jsx";
import RegisterPage from './RegisterPage.jsx';
import SignInPage from './SignInPage.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<LoginPage/>}> </Route>
            <Route path = "/register" element = {<RegisterPage/>}/>
            <Route path = "/signIn" element={<SignInPage/>}></Route>
            <Route path = "/store" element = {<StorePicker></StorePicker>}/>
            <Route path = "/store/:storeId" element = {<App/>}/>
            <Route path = "/*" element = {<NotFound error = "404"/>} />
        </Routes>
    </BrowserRouter>
    )
}

export default Router;