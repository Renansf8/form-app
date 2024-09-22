import { toastMessage } from "../utils/toastMeassage";
import { ParamsProps, RegisterProps } from "./IContext";

import axios from "axios";
import { QueryObserverResult, RefetchOptions, useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";

type ContextData = {
  getAllRegisters: () => { data: RegisterProps[], isLoading: boolean, refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<any, Error>> };
  createRegister: () => { mutate: any};
  removeRegister: (refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<any, Error>> ) => { mutate: any};
  setRegisterSelected: (info: RegisterProps) => void;
  registerSelected?: RegisterProps;
  editRegister: (refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<any, Error>> ) => { mutate: any};
  setOpen: (value: boolean) => void
  open: boolean
}

const RegistersContext = createContext<ContextData>({} as ContextData)

const BASE_URL = 'http://localhost:3000/users'

export const RegistersProvider = ({ children }: ParamsProps) => {
  const [open, setOpen] = useState(false);
  const [registerSelected, setRegisterSelected] = useState({
    id: '',
    name: '',
    cpf: '',
    email: '',
    phone: '',
    address: ''
  })

  function getAllRegisters() {
    const { data, refetch, isLoading } = useQuery({
      queryKey: ['registers'],
      queryFn: () => axios.get(BASE_URL).then(response => response.data)
    })
    return { data, refetch, isLoading }
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

  const update = async (data: RegisterProps) => {
    return await axios.put(`${BASE_URL}/${registerSelected.id}`, data)
  }

  function editRegister(action: any) {
    const mutate = useMutation({
      mutationFn: update,
      onSuccess:()=>{
        action()
        return toastMessage("Cadastro atualizado com sucesso!", "success")
      },
      onError:()=>{
        return toastMessage("Não foi possível atualizar o cadastro!", "error")
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
        registerSelected,
        editRegister,
        setOpen,
        open
      }}>
      {children}
    </RegistersContext.Provider>
  )
}

export function useRegister() {
  const context = useContext(RegistersContext)

  return context;
}