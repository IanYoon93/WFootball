import { z } from 'zod';

export const signUpSchema = z
  .object({
    email: z.string().email('유효한 이메일 주소를 입력해주세요.'),
    password: z.string().min(8, '비밀번호는 8글자 이상이여야 합니다.'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '입력한 비밀번호와 일치하지않습니다.',
    path: ['confirmPassword'],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
