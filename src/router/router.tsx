import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from "../pages/register/Register";
import { RegistersList } from "../pages/registersList/registersList";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/list" element={<RegistersList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
