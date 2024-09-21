import { z } from "zod";

export const createRegisterSchema = z.object({
  name: z.string().min(1, 'O campo Nome é obrigatório'),
  cpf: z.string().min(14, 'O campo CPF é obrigatório'),
  email: z.string().email('Formato de E-mail inválido'),
  phone: z.string().min(1, 'O campo telefone é obrigatório'),
  address: z.string().optional(),
})

export type CreateRegisterSchema = z.infer<typeof createRegisterSchema>