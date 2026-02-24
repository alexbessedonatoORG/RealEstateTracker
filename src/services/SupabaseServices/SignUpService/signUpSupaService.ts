import { supabase } from "../SupabaseClient";
import type { SignUpFormValues } from "@types";
export const signUpSupaService = async (
  data: SignUpFormValues,
  onClose: () => void
) => {
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        display_name: data.username,
      },
    },
  });

  if (error) alert(error.message);
  else {
    onClose();
  }
};
