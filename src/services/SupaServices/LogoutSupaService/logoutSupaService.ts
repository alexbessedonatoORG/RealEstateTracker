import { supabase } from "../Supabase/SupabaseClient";

export const logoutSupaService = () => {
  supabase.auth.signOut();
};
