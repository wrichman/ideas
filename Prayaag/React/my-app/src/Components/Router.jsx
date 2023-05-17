import React from 'react';
import StorePicker from './StorePicker.jsx';
import NotFound from "./NotFound.jsx";
import App from "../App.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<StorePicker/>}> </Route>
            <Route path = "/store/:storeId" element = {<App/>}/>
            <Route path = "/*" element = {<NotFound error = "404"/>} />
        </Routes>
    </BrowserRouter>
    )
}

export default Router;