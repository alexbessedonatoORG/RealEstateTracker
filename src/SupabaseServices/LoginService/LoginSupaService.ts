import { supabase } from "../SupabaseClient";
import type { LoginFormValues } from "@types";

export const loginSupaService = async (
  data: LoginFormValues,
  onClose: () => void
) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) alert(error.message);
  else {
    onClose();
  }
};
