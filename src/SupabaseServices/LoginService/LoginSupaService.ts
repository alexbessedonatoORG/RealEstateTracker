import { supabase } from "../SupabaseClient";
import { LoginForm } from "../../common/components/Header/components/Login/LoginForm/LoginForm";

export const loginSupaService = async (
  data: LoginForm,
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
