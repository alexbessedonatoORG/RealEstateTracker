import { supabase } from "../SupabaseClient";

export const GetSignedURLService = async (propertyURL: string) => {
    const { data, error } = await supabase.storage
        .from("PropertyContracts")
        .createSignedUrl(propertyURL, 60);

    if (error) {
        console.error("Error generating signed URL:", error.message);
        throw error;
    }

    return data.signedUrl;
}