import React from 'react'
import { Button } from "@mui/material";
import { useHookFormMask } from 'use-mask-input';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateRegisterSchema, createRegisterSchema } from './validation';

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateRegisterSchema>({
    resolver: zodResolver(createRegisterSchema)
  })
  const registerWithMask = useHookFormMask(register);

  function handleCreateRegister(data: CreateRegisterSchema) {
    console.log('data', data)
  }

  return (
    <form onSubmit={handleSubmit(handleCreateRegister)} className="w-[400px] flex flex-col items-center">
      <label htmlFor="">Nome</label>
      <input
        type="text"
        placeholder="Digite seu nome..."
        className="mb-4 bg-stone-100 text-black border-[1.5px] border-[#bdbdbd] p-3 w-[100%] rounded-md focus:border-[#7913d8]"
        {...register('name')}
      />
      {errors.name && <span>*{errors.name?.message}</span>}

      <label htmlFor="">CPF</label>
      <input
        type="text"
        placeholder="Digite seu CPF..."
        className="mb-4 bg-stone-100 text-black border-[1.5px] border-[#bdbdbd] p-3 w-[100%] rounded-md focus:border-[#7913d8]"
        {...registerWithMask('cpf', ['999.999.999-99'])}
      />
      {errors.cpf && <span>*{errors.cpf?.message}</span>}

      <label htmlFor="">E-mail</label>
      <input
        type="text"
        placeholder="Digite seu E-mail..."
        className="mb-4 bg-stone-100 text-black border-[1.5px] border-[#bdbdbd] p-3 w-[100%] rounded-md focus:border-[#7913d8]"
        {...register('email')}
      />
      {errors.email && <span>*{errors.email?.message}</span>}

      <label htmlFor="">Telefone</label>
      <input
        type="text"
        placeholder="Digite seu telefone..."
        className="mb-4 bg-stone-100 text-black border-[1.5px] border-[#bdbdbd] p-3 w-[100%] rounded-md focus:border-[#7913d8]"
        {...registerWithMask('phone', ['(99) 99999-9999'])}
      />
      {errors.phone && <span>*{errors.phone?.message}</span>}

      <label htmlFor="">Endereço</label>
      <input
        type="text"
        placeholder="Digite seu Endereço..."
        className="mb-4 bg-stone-100 text-black border-[1.5px] border-[#bdbdbd] p-3 w-[100%] rounded-md focus:border-[#7913d8]"
        {...register('address')}
      />

      <Button type="submit" className="w-[100%] bg-[#7913d8] border-none mt-2 p-2" variant="contained">Enviar</Button>
    </form>
  )
}