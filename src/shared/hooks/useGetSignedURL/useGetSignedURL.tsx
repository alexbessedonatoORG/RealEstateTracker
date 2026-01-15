import { supabase } from "../../../services/SupaServices/Supabase/SupabaseClient";

export const useGetSignedURL = async (propertyInsuranceURL: string) => {
    // Supabase returns { data: { signedUrl: string }, error }
    const { data, error } = await supabase.storage
        .from("PropertyContracts")
        .createSignedUrl(propertyInsuranceURL, 60);

    if (error) {
        console.error("Error generating signed URL:", error.message);
        throw error;
    }

    return data.signedUrl;
}