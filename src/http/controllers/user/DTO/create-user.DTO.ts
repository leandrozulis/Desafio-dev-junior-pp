import { z } from 'zod';

export const createUserDTO = z.object({
  fullName: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  cpfCnpj: z.string().min(11, 'CPF/CNPJ must be at least 11 characters long').max(14, 'CPF/CNPJ must be at most 14 characters long'),
  balance: z.number().min(0, 'Balance must be a non-negative number'),
  role: z.enum(['COMUM', 'LOJISTA'], {
    errorMap: () => ({ message: 'Role must be either "COMUM" or "LOJISTA"' }),
  }),
});

export type CreateContaDTO = z.infer<typeof createUserDTO>