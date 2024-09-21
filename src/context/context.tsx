import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext, useContext } from "react";
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
  function getAllRegisters() {
    const { data } = useQuery({
      queryKey: ['registers'],
      queryFn: () => axios.get(BASE_URL).then(response => response.data)
    })
    return { data }
  }

  const submit = async (data: RegisterProps) => {
    return await axios.post(BASE_URL, data)
  }

  function createRegister() {
    const mutate = useMutation({
      mutationFn: submit,
      onSuccess:()=>{
        return toast("Cadastro realizado com sucesso!", { type: 'success'})
      },
      onError:()=>{
        return toast("Cadastro realizado com sucesso!", { type: 'success'})
      }
    })
    
    return mutate
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