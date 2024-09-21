import { Button } from "@mui/material";
import { useHookFormMask } from 'use-mask-input';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateRegisterSchema, createRegisterSchema } from './validation';
import { useRegister } from '../../context/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormProps = {
  info?: {
    name?: string,
    cpf?: string,
    email?: string,
    phone?: string,
    address?: string,
  },
  isEditForm?: boolean,
}

export function Form({ info, isEditForm }: FormProps) {
  const { createRegister } = useRegister()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateRegisterSchema>({
    resolver: zodResolver(createRegisterSchema)
  })
  const registerWithMask = useHookFormMask(register);

  const { mutate } = createRegister()
  function handleCreateRegister(data: CreateRegisterSchema) {
    mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(handleCreateRegister)} className="w-[400px] flex flex-col items-center">
      <label htmlFor="">Nome</label>
      <input
        defaultValue={info?.name}
        type="text"
        placeholder="Digite seu nome..."
        className="mb-4 bg-stone-100 text-black border-[1.5px] border-[#bdbdbd] p-3 w-[100%] rounded-md focus:border-[#7913d8]"
        {...register('name')}
      />
      {errors.name && <span>*{errors.name?.message}</span>}

      <label htmlFor="">CPF</label>
      <input
        defaultValue={info?.cpf}
        type="text"
        placeholder="Digite seu CPF..."
        className="mb-4 bg-stone-100 text-black border-[1.5px] border-[#bdbdbd] p-3 w-[100%] rounded-md focus:border-[#7913d8]"
        {...registerWithMask('cpf', ['999.999.999-99'])}
      />
      {errors.cpf && <span>*{errors.cpf?.message}</span>}

      <label htmlFor="">E-mail</label>
      <input
        defaultValue={info?.email}
        type="text"
        placeholder="Digite seu E-mail..."
        className="mb-4 bg-stone-100 text-black border-[1.5px] border-[#bdbdbd] p-3 w-[100%] rounded-md focus:border-[#7913d8]"
        {...register('email')}
      />
      {errors.email && <span>*{errors.email?.message}</span>}

      <label htmlFor="">Telefone</label>
      <input
        defaultValue={info?.phone}
        type="text"
        placeholder="Digite seu telefone..."
        className="mb-4 bg-stone-100 text-black border-[1.5px] border-[#bdbdbd] p-3 w-[100%] rounded-md focus:border-[#7913d8]"
        {...registerWithMask('phone', ['(99) 99999-9999'])}
      />
      {errors.phone && <span>*{errors.phone?.message}</span>}

      <label htmlFor="">Endereço</label>
      <input
       defaultValue={info?.address}
        type="text"
        placeholder="Digite seu Endereço..."
        className="mb-4 bg-stone-100 text-black border-[1.5px] border-[#bdbdbd] p-3 w-[100%] rounded-md focus:border-[#7913d8]"
        {...register('address')}
      />

      <Button type="submit" className="w-[100%] bg-[#7913d8] border-none mt-2 p-2 font-bold" variant="contained">{isEditForm ? 'Salvar alterações' : 'Cadastrar'}</Button>
      <ToastContainer closeOnClick theme="light" />
    </form>
  )
}