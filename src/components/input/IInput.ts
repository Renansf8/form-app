import { FieldErrors, UseFormRegister } from "react-hook-form";

type FieldProps = "name" | "cpf" | "email" | "phone" | "address";

export interface Props {
  errors: FieldErrors<{
    name: string;
    cpf: string;
    email: string;
    phone: string;
    address?: string | undefined;
}>;
  register?: UseFormRegister<{
    name: string;
    cpf: string;
    email: string;
    phone: string;
    address?: string | undefined;
}>;
  label: string;
  nameRegister: FieldProps;
  defaultValue?: string;
}