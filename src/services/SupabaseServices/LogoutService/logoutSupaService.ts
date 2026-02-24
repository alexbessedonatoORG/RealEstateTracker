import { supabase } from "../SupabaseClient";

export const logoutSupaService = () => {
  supabase.auth.signOut();
};
