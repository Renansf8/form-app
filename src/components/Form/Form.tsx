import { Button } from "@mui/material";
import { useHookFormMask } from 'use-mask-input';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateRegisterSchema, createRegisterSchema } from './validation';
import { useRegister } from '../../context/Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, InputMask } from "../input/Input";
import { FormProps } from "./IForm";

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
  const registerWithMask = useHookFormMask(register);

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
        placeholder="Digite seu nome..."
        errors={errors}
        register={register}
        label="Nome"
        defaultValue={info?.name}
        nameRegister="name"
      />

      <InputMask
        placeholder="Digite seu CPF..."
        errors={errors}
        registerWithMask={registerWithMask}
        label="CPF"
        defaultValue={info?.cpf}
        nameRegister="cpf"
        mask={["999.999.999-99"]}
      />

      <Input
        placeholder="Digite seu e-mail..."
        errors={errors}
        register={register}
        label="E-mail"
        defaultValue={info?.email}
        nameRegister="email"
      />

      <InputMask
        placeholder="Digite seu telefone..."
        errors={errors}
        registerWithMask={registerWithMask}
        label="Telefone"
        defaultValue={info?.phone}
        nameRegister="phone"
        mask={["(99) 99999-9999"]}
      />

      <Input
        placeholder="Digite seu endereço..."
        errors={errors}
        register={register}
        label="Endereço"
        defaultValue={info?.address}
        nameRegister="address"
      />

      <Button type="submit" className="w-[90%] bg-[#7913d8] border-none mt-2 p-2 font-bold" variant="contained">{isEditForm ? 'Salvar alterações' : 'Cadastrar'}</Button>
      {!isEditForm && <ToastContainer closeOnClick theme="light" />}
    </form>
  )
}