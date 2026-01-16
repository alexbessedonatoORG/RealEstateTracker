import { supabase } from "../SupabaseClient";
import { SignUpForm } from "../../common/components/Header/components/SignUp/SignUpForm/SignUpForm";
export const signUpSupaService = async (
  data: SignUpForm,
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
