import { supabase } from "../SupabaseClient";
import { $auth } from "../../../stores/AuthStore"; 
import type { Property } from "@types";
import { useSlugify } from "../../../common/hooks/useSlugify/useSlugify";

type AddPropertyPayload = Omit<Property, "id" | "user_id" | "insurance_url" | "contract_url"> & {
  insurance_url?: string | File | null;
  contract_url?: string | File | null;
};

type DocumentType = "InsuranceContracts" | "PropertyContracts";

const createPropertyFilePath = (
  file: File,
  propertyName: string,
  type: DocumentType,
  userId: string
) => {
  const cleanProperty = useSlugify(propertyName);
  const date = new Date().toISOString().split("T")[0];
  const fileExtension = file.name.split(".").pop();

  return `${userId}/${useSlugify(type)}/${cleanProperty}/${date}/${cleanProperty}.${fileExtension}`;
};

export const addPropertySupaService = async (
  data: AddPropertyPayload,
  onSuccess: () => void
) => {
  const { user } = $auth.get();

  if (!user) {
    alert("You must be logged in to add a property");
    return;
  }
  //first we need to upload the insurance and contract files to supabase storage, and get their urls to store in the database   

  const propertyName = (data.name ?? "property").trim() || "property";
  let insurancePath: string | null =
    typeof data.insurance_url === "string" ? data.insurance_url : null;
  let contractPath: string | null =
    typeof data.contract_url === "string" ? data.contract_url : null;

  try {
    if (data.insurance_url instanceof File) {
      const manualInsurancePath = createPropertyFilePath(
        data.insurance_url,
        propertyName,
        "InsuranceContracts",
        user.id
      );

      const { data: insuranceStorageData, error: insuranceStorageError } = await supabase.storage
        .from("PropertyContracts")
        .upload(manualInsurancePath, data.insurance_url, { upsert: true });

      if (insuranceStorageError) throw insuranceStorageError;
      insurancePath = insuranceStorageData.path;
    }

    if (data.contract_url instanceof File) {
      const manualContractPath = createPropertyFilePath(
        data.contract_url,
        propertyName,
        "PropertyContracts",
        user.id
      );

      const { data: contractStorageData, error: contractStorageError } = await supabase.storage
        .from("PropertyContracts")
        .upload(manualContractPath, data.contract_url, { upsert: true });

      if (contractStorageError) throw contractStorageError;
      contractPath = contractStorageData.path;
    }
  } catch (uploadError) {
    const message = uploadError instanceof Error ? uploadError.message : "Document upload failed";
    alert(message);
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
                    insurance_url: insurancePath,
                    contract_url: contractPath,
                    user_id: user.id
                }
            ]);

        if (error) {
            alert(error.message);
        } else {
            onSuccess();
        }
};
