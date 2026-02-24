import { supabase } from "../SupabaseClient";
import { $auth } from "../../../stores/AuthStore"; 
import type { AddTenantFormValues } from "@types";

export const addTenantSupaService = async (
  data: AddTenantFormValues,
  onSuccess: () => void
) => {
  const { user } = $auth.get();

  if (!user) {
    alert("You must be logged in to add a tenant");
    return;
  }

  const { error } = await supabase.from("tenants").insert([
    {
      property_id: data.property_id,
      full_name: data.name,
      email: data.email,
      phone: data.phone,
      end_of_contract: data.endOfContract,
    },
  ]);

  if (error) {
    alert(error.message);
  } else {
    onSuccess();
  }
};
