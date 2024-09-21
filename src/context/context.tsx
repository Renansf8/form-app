import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';

type ContextData = {
  getAllRegisters: any;
  createRegister: any;
}

const RegistersContext = createContext<ContextData>({} as ContextData)

type ParamsProps = {
  children: React.ReactNode
}

type RegisterProps = {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  address: string;
}

const BASE_URL = 'http://localhost:3000/users'

export const RegistersProvider = ({ children }: ParamsProps) => {
  const [registers, setRegisters] = useState([])

  async function getAllRegisters() {
    try {
      const response = await axios.get(BASE_URL)
      .then(response => setRegisters(response.data))
      return response
    } catch (err) {
      return toast("Não foi possível listar os registros!", { type: 'error'})
    }
  }
  console.log('registers', registers)

  async function createRegister(data: RegisterProps) {
    try {
      const create = await axios.post(BASE_URL, data)
      .then(() => toast("Cadastro realizado com sucesso!", { type: 'success'}));
      console.log('create', create)
      return create
    } catch (err) {
      return toast("Não foi possível realizar o cadastro!", { type: 'error'})
    }
  }

  return (
    <RegistersContext.Provider value={{ getAllRegisters, createRegister }}>
      {children}
    </RegistersContext.Provider>
  )
}

export function useRegister() {
  const context = useContext(RegistersContext)

  return context;
}