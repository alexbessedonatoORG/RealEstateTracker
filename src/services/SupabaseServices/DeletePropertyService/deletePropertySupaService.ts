import { supabase } from "../SupabaseClient";
import { $auth } from "../../../stores/AuthStore";


export const deletePropertySupaService = async (propertyId: string, onSuccess: () => void) => {
    const user = $auth.get().user;

    if (!user) {
        alert("You must be logged in to delete a property");
        return;
    }

    const { error } = await supabase
        .from("property")
        .delete()
        .eq("id", propertyId)
        .eq("user_id", user.id);

    if (error) {
        alert("Failed to delete property: " + error.message);
        return;
    }

    onSuccess();
}