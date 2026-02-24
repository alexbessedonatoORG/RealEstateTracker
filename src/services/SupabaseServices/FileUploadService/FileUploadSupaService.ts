import { supabase } from "../SupabaseClient";
import { $auth } from "../../../stores/AuthStore"; 
import { useSlugify } from "../../../common/hooks/useSlugify/useSlugify";
import type { FileUploadSupaServiceProps } from "@types";

export const FileUploadAndLinkService = async ({
  propertyId,
  property,
  file,
  type = "PropertyContracts",
}: FileUploadSupaServiceProps & { propertyId: string }) => {
  const user = $auth.get().user;
  if (!user) throw new Error("No authenticated user found");

  const cleanProperty = useSlugify(property);
  const date = new Date().toISOString().split("T")[0];
  const fileExtension = file.name.split(".").pop();
  const filePath = `${user.id}/${useSlugify(
    type
  )}/${cleanProperty}/${date}/${cleanProperty}.${fileExtension}`;

  const { data: storageData, error: storageError } = await supabase.storage
    .from("PropertyContracts")
    .upload(filePath, file, { upsert: true });

  if (storageError) throw storageError;

  const columnToUpdate =
    type === "InsuranceContracts" ? "insurance_url" : "contract_url";

  const { error: dbError } = await supabase
    .from("Property")
    .update({ [columnToUpdate]: storageData.path })
    .eq("id", propertyId);

  if (dbError) {
    console.error("Database link failed:", dbError.message);
    return { success: false, error: dbError };
  }

  return { success: true, path: storageData.path };
};
