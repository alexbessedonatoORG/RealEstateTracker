import { supabase } from "../SupabaseClient";
import { $auth } from "../../stores/AuthStore";
import type { AddManagerFormValues } from "@types";

export const addManagerSupaService = async (
  data: AddManagerFormValues,
  onSuccess: () => void
) => {
  const { user } = $auth.get();

  if (!user) {
    alert("You must be logged in to add a manager");
    return;
  }

  const { error } = await supabase.from("property_managers").insert([
    {
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      owner_id: user.id,
    },
  ]);

  if (error) {
    alert(error.message);
  } else {
    onSuccess();
  }
};
