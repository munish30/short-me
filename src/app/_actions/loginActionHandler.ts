"use server";

import { createClient } from "@/utils/supabase/server";
import { loginSchema } from "../_schemas/loginSchema";
import { GenericResponse } from "../_types/response";

type SupabaseData = {
  user: {
    email: string;
    phone: string | null;
  },
  session: {
    access_token: string;
    refresh_token: string;
  }
}



export const loginActionHandler = async (formData: {
  email: any;
  password: any;
}): Promise<GenericResponse> => {
  const validation = loginSchema.safeParse(formData);
  console.log(validation)
  if (!validation.success) {
    const data = {
        data: null,
        errors: Object.fromEntries(validation.error.errors.map((error) => [error.path[0], error.message]))
    }
    return JSON.parse(JSON.stringify(data)) as GenericResponse;
    // console.log(data);
    // return JSON.parse(JSON.stringify(data));
  }
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword(formData);
  // console.log(data, error);
  if (error) {
    return {
        data: null,
        errors: {auth: error.message}
    }
  }
  return {
    data: data,
    errors: null,
  };
};
