import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

const Routrt = ( ) => (
    <BrowserRouter>
    <switch>
        <Route exact path ="/" compoent = {StorePicker}/>
        <Route path = "/store/:storeId" component = {APP}/>
        <Route path = "/store/:storeId" component = {APP}/>
        <Route component = {NotFound} />
    </switch>
    </BrowserRouter>
);

export default Router;