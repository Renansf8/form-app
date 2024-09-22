import { z } from "zod";

export const createRegisterSchema = z.object({
  name: z.string().min(1, 'O campo Nome é obrigatório'),
  cpf: z.string().min(1, 'O campo CPF é obrigatório').refine((doc) => {
    const replacedDoc = doc.replace(/\D/g, '');
    return replacedDoc.length >= 11;
  }, 'Formato de CPF inválido'),
  email: z.string().min(1, 'O campo E-mail é obrigatório').email('Formato de E-mail inválido'),
  phone: z.string().min(1, 'O campo Telefone é obrigatório').refine((doc) => {
    const replacedDoc = doc.replace(/\D/g, '');
    return replacedDoc.length >= 11;
  }, 'Formato de Telefone inválido'),
  address: z.string().optional(),
})

export type CreateRegisterSchema = z.infer<typeof createRegisterSchema>