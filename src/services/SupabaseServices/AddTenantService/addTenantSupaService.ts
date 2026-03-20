import { supabase } from "../SupabaseClient";
import { $auth } from "../../../stores/AuthStore"; 
import type { Tenant } from "@types";

export const addTenantSupaService = async (
  data: Omit<Tenant, "id" | "createdAt" | "property">,
  onSuccess: () => void
) => {

  const { user } = $auth.get();

  if (!user) return alert("You must be logged in to add a tenant");

  const { error } = await supabase.from("tenants").insert([
    {
      property_id: data.propertyId,
      full_name: data.fullName,
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
