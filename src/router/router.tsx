import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from "../pages/register/Register";
import { ListRegisters } from "../pages/listRegisters/ListRegisters";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/list" element={<ListRegisters />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
