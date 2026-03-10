import { supabase } from "../SupabaseClient";
import { $auth } from "../../../stores/AuthStore"; 
import type { Property } from "@types";

export const addPropertySupaService = async (
  data: Property,
  onSuccess: () => void
) => {
  const { user } = $auth.get();

  if (!user) {
    alert("You must be logged in to add a property");
    return;
  }

 const { error } = await supabase
            .from('property')
            .insert([
                {
                    name: data.name,
                    address: data.address,
                    rent: Number(data.rent),
                    mortgage: Number(data.mortgage),
                    insurance_url: data.insurance_url,
                    contract_url: data.contract_url,
                    user_id: user.id
                }
            ]);

        if (error) {
            alert(error.message);
        } else {
            onSuccess();
        }
};
