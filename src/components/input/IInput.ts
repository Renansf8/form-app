import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type FieldProps = "name" | "cpf" | "email" | "phone" | "address";

export interface Props extends InputProps {
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
  registerWithMask?: (fieldName: FieldProps, mask: string[]) => any;
  label: string;
  nameRegister: FieldProps;
  mask?: string[]
}