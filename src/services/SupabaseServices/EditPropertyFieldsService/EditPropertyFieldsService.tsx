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


    //first we upload insurance file into bucket
    if (data.property.propertyInsurance instanceof File) {
        const InsuranceFilePath = generateFilePath(data.property, "InsuranceContracts");

        const { data: insuranceStorageData, error: insuranceStorageError } = await supabase.storage
            .from("PropertyContracts")
            .upload(InsuranceFilePath, data.property.propertyInsurance as File, { upsert: true });

        if (insuranceStorageError) throw insuranceStorageError;

        updatePayloadData.insurance_url = insuranceStorageData.path;
    }

    //then we upload contract file into bucket
    if (data.property.propertyContract instanceof File) {
        const ContractFilePath = generateFilePath(data.property, "PropertyContracts");

        const { data: contractStorageData, error: contractStorageError } = await supabase.storage
            .from("PropertyContracts")
            .upload(ContractFilePath, data.property.propertyContract as File, { upsert: true });

        if (contractStorageError) throw contractStorageError;

        updatePayloadData.contract_url = contractStorageData.path;
    }

    //then we update the database with the new info from the form, including the new urls for insurance and contract if they were updated
    const { error: dbUpdateError } = await supabase
        .from("property")
        .update(updatePayloadData)
        .eq("id", data.property.propertyId);

    if (dbUpdateError) {
        console.error("Database update failed:", dbUpdateError.message);
        return { success: false, error: dbUpdateError };
    }

    return { success: true };
}