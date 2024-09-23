import { Input, InputNumber } from "../input/Input";
import { FormProps } from "./IForm";
import { CreateRegisterSchema, createRegisterSchema } from './validation';
import { useRegister } from '../../context/Context';

import { useForm } from "react-hook-form";
import { ToastContainer } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@mui/material";

import 'react-toastify/dist/ReactToastify.css';

export function Form({ info, isEditForm }: FormProps) {
  const { createRegister, editRegister, getAllRegisters, setOpen } = useRegister()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<CreateRegisterSchema>({
    resolver: zodResolver(createRegisterSchema)
  })
  const { refetch } = getAllRegisters()

  const { mutate } = createRegister()

  const { mutate: mutateEdit } = editRegister(refetch)

  function handleCreateRegister(data: CreateRegisterSchema) {
    if (!isEditForm) {
      mutate(data)
      reset()
    } else {
      mutateEdit(data)
      setOpen(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleCreateRegister)} className="w-[400px] flex flex-col items-center">
      <Input
        errors={errors}
        register={register}
        label="Nome"
        defaultValue={info?.name}
        nameRegister="name"
      />

      <InputNumber
        errors={errors}
        register={register}
        label="CPF"
        defaultValue={info?.cpf}
        nameRegister="cpf"
      />

      <Input
        errors={errors}
        register={register}
        label="E-mail"
        defaultValue={info?.email}
        nameRegister="email"
      />

      <InputNumber
        errors={errors}
        register={register}
        label="Telefone"
        defaultValue={info?.phone}
        nameRegister="phone"
      />

      <Input
        errors={errors}
        register={register}
        label="Endereço"
        defaultValue={info?.address}
        nameRegister="address"
      />

      <Button type="submit" className="w-[90%] bg-[#f47915] border-none mt-2 p-2 font-bold" variant="contained">{isEditForm ? 'Salvar alterações' : 'Cadastrar'}</Button>
      {!isEditForm && <ToastContainer closeOnClick theme="light" />}
    </form>
  )
}