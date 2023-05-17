import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StorePicker from './StorePicker';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<StorePicker/ >} />
    </Routes>
  </BrowserRouter>
)

export default Router