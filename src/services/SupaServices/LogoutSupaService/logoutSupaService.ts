import { supabase } from "../../../app/routes/Supabase/SupabaseClient";

export const logoutSupaService = () => {
  supabase.auth.signOut();
};
