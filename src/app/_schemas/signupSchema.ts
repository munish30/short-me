import { z } from 'zod';

export const signupSchema = z.object({
    name: z.string({message: 'Name is required'}).trim().min(1),
    email: z.string({ message: 'Email is required.' }).email('Value must be an email').trim(),
    password: z.string({ message: 'Password is required' }).min(8, { message: "Password should be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Password should contain at least one letter." })
    .regex(/[0-9]/, { message: "Password should contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {message: "Password should contain at least one special character."})
    .trim(),
})