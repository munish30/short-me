"use server";

import { createClient } from "@/utils/supabase/server";
import { GenericResponse } from "../_types/response";
import { signupSchema } from "../_schemas/signupSchema";

export const signupActionHandler = async (formData: { name: any, email: any, password: any }): Promise<GenericResponse> => {
    const validation = signupSchema.safeParse(formData);
    console.log(validation);
    if (!validation.success) {
        return {
            data: null,
            errors: Object.fromEntries(validation.error.errors.map((error) => [error.path[0], error.message]))
        }
    }
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
        ...formData,
        options: {
            data: {
                name: formData.name,
                profile_picture_url: `https://picsum.photos/200/200/${Math.floor(Math.random() * 1000)}`
            }
        }
    });
    console.log({error, data})
    if (error) {
        return {
            errors: {auth: error.message},
            data: null
        }
    }
    return {
        data,
        errors: null
    };
}