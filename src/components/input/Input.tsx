import React from "react";
import { Props } from "./IInput";
import { TextField } from "@mui/material";

export const Input: React.FC<Props> = ({
  register, 
  errors, 
  label, 
  nameRegister,
  defaultValue,
}: Props) => {
  return (
    <>
      <TextField
        variant="outlined"
        type="text"
        color="warning"
        className="mb-4 text-black w-[90%] rounded-md"
        {...register!(nameRegister)}
        label={label}
        defaultValue={defaultValue}
       />
      {errors[nameRegister] && <span className="w-[90%]">*{errors[nameRegister]?.message}</span>}
    </>
  )
}

export const InputNumber: React.FC<Props> = ({
  register, 
  errors, 
  label, 
  nameRegister,
  defaultValue,
}: Props) => {
  return (
    <>
      <TextField
        variant="outlined"
        type="number"
        color="warning"
        className="mb-4 text-black w-[90%] rounded-md"
        {...register!(nameRegister)}
        label={label}
        defaultValue={defaultValue}
        // Código para limitar a quantidade de caracteres no input tipo "number"
        onInput={(e: any)=>{ 
          e.target.value = Math.max(-1, parseInt(e.target.value) ).toString().slice(0,11)
        }}
       />
      {errors[nameRegister] && <span className="w-[90%]">*{errors[nameRegister]?.message}</span>}
    </>
  )
}