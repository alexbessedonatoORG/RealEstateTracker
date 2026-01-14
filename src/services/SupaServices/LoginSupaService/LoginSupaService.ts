import { supabase } from "../../../app/routes/Supabase/SupabaseClient";
import { LoginForm } from "../../../shared/Header/components/Login/LoginForm/LoginForm";

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
    console.log("Login successful");
    onClose();
  }
};
