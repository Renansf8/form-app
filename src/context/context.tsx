import { QueryObserverResult, RefetchOptions, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';
import { toastMessage } from "../utils/toastMeassage";

type ContextData = {
  getAllRegisters: () => { data: RegisterProps[], refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<any, Error>> };
  createRegister: () => { mutate: any};
  removeRegister: (refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<any, Error>> ) => { mutate: any};
  setRegisterSelected: (info: RegisterProps) => void;
  registerSelected?: RegisterProps | {};
}

const RegistersContext = createContext<ContextData>({} as ContextData)

type ParamsProps = {
  children: React.ReactNode
}

export type RegisterProps = {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  address: string;
}

const BASE_URL = 'http://localhost:3000/users'

export const RegistersProvider = ({ children }: ParamsProps) => {
  const [registerSelected, setRegisterSelected] = useState({})

  function getAllRegisters() {
    const { data, refetch } = useQuery({
      queryKey: ['registers'],
      queryFn: () => axios.get(BASE_URL).then(response => response.data)
    })
    return { data, refetch }
  }

  const submit = async (data: RegisterProps) => {
    return await axios.post(BASE_URL, data)
  }

  function createRegister() {
    const mutate = useMutation({
      mutationFn: submit,
      onSuccess:()=>{
        return toastMessage("Cadastro realizado com sucesso!", "success")
      },
      onError:()=>{
        return toastMessage("Não foi possível realizar o cadastro!", "error")
      }
    })
    
    return mutate
  }

  const remove = async (id: string) => {
    return await axios.delete(`${BASE_URL}/${id}`)
  }

  function removeRegister(action: any) {
    const mutate = useMutation({
      mutationFn: remove,
      onSuccess:()=>{
        action()
        return toastMessage("Cadastro removido com sucesso!", "success")
      },
      onError:()=>{
        return toastMessage("Não foi possível remover o cadastro!", "error")
      }
    })
    
    return mutate
  }

  return (
    <RegistersContext.Provider value={{ 
      getAllRegisters, 
      createRegister, 
      removeRegister,
      setRegisterSelected,
      registerSelected
      }}>
      {children}
    </RegistersContext.Provider>
  )
}

export function useRegister() {
  const context = useContext(RegistersContext)

  return context;
}