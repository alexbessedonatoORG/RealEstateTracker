import { $auth } from "../../../stores/AuthStore";
import { generateFilePath } from "../../../common/utils/generateFilePath/generateFilePath";
import { supabase } from "../SupabaseClient";

interface Data {
    property: {
        propertyId: string;
        propertyName: string;
        propertyAddress: string;
        propertyRent: number;
        propertyMortgage: number;
        propertyInsurance: string | File | null;
        propertyContract: string | File | null;
    }
}

export const EditPropertyFieldsService = async (data: Data) => {

    const updatePayloadData: Record<string, string | number> = {
        name: data.property.propertyName,
        address: data.property.propertyAddress,
        rent: data.property.propertyRent,
        mortgage: data.property.propertyMortgage,
    }

    const user = $auth.get().user;
    if (!user) throw new Error("No authenticated user found");
    const InsuranceFilePath = generateFilePath(data.property, "InsuranceContracts");
    const ContractFilePath = generateFilePath(data.property, "PropertyContracts");


    const { data: insuranceStorageData, error: insuranceStorageError } = await supabase.storage
        .from("PropertyContracts")
        .upload(InsuranceFilePath, data.property.propertyInsurance as File, { upsert: true });

    if (insuranceStorageError) throw insuranceStorageError;

    const { data: contractStorageData, error: contractStorageError } = await supabase.storage
        .from("PropertyContracts")
        .upload(ContractFilePath, data.property.propertyContract as File, { upsert: true });

    if (contractStorageError) throw contractStorageError;

    const { error: dbInsuranceUploadError } = await supabase
        .from("Property")
        .update({ ["insurance_url"]: insuranceStorageData.path })
        .eq("id", data.property.propertyId);

    if (dbInsuranceUploadError) {
        console.error("Database link failed:", dbInsuranceUploadError.message);
        return { success: false, error: dbInsuranceUploadError };
    }

    const { error: dbContractUploadError } = await supabase
        .from("Property")
        .update({ ["contract_url"]: contractStorageData.path })
        .eq("id", data.property.propertyId);

    if (dbContractUploadError) {
        console.error("Database link failed:", dbContractUploadError.message);
        return { success: false, error: dbContractUploadError };
    }

    updatePayloadData.contract_url = contractStorageData.path;
    updatePayloadData.insurance_url = insuranceStorageData.path;

    const { error: dbUpdateError } = await supabase
        .from("Property")
        .update(updatePayloadData)
        .eq("id", data.property.propertyId);

    if (dbUpdateError) {
        console.error("Database update failed:", dbUpdateError.message);
        return { success: false, error: dbUpdateError };
    }

    return { success: true };
}