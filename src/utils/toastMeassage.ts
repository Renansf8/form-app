import { toast, TypeOptions } from "react-toastify";

export function toastMessage(message: string, type: TypeOptions) {
  return toast(message, { type: type, autoClose: 3000})
}