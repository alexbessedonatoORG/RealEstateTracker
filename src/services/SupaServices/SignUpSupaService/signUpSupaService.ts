import { supabase } from "../../../app/routes/Supabase/SupabaseClient";
import { SignUpForm } from "../../../shared/Header/components/SignUp/SignUpForm/SignUpForm";
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
    console.log("Sign Up successful");
    onClose();
  }
};
