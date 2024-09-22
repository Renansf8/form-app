import React from "react";
import { Props } from "./IInput";

export const Input: React.FC<Props> = ({
  register, 
  errors, 
  label, 
  nameRegister, 
  registerWithMask, 
  ...props
}: Props) => {
  return (
    <>
      <label htmlFor="" className="w-[90%]">{label}</label>
      <input
        {...props}
        type="text"
        className="mb-4 bg-stone-100 text-black border-[1.5px] border-[#bdbdbd] p-3 w-[90%] rounded-md focus:border-[#7913d8]"
        {...register!(nameRegister)}
       />
      {errors[nameRegister] && <span className="w-[90%]">*{errors[nameRegister]?.message}</span>}
    </>
  )
}

export const InputMask: React.FC<Props> = ({
  register, 
  errors, 
  label, 
  nameRegister, 
  registerWithMask, 
  mask,
  ...props
}: Props) => {
  return (
    <>
      <label htmlFor="" className="w-[90%]">{label}</label>
      <input
        {...props}
        type="text"
        className="mb-4 bg-stone-100 text-black border-[1.5px] border-[#bdbdbd] p-3 w-[90%] rounded-md focus:border-[#7913d8]"
        {...registerWithMask!(nameRegister, mask!)}
       />
      {errors[nameRegister] && <span className="w-[90%]">*{errors[nameRegister]?.message}</span>}
    </>
  )
}