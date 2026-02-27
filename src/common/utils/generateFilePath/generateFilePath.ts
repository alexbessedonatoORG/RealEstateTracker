import { $auth } from "../../../stores/AuthStore";
import { useSlugify } from "../../hooks/useSlugify/useSlugify";

interface PropertyData {
    propertyId: string;
    propertyName: string;
    propertyAddress: string;
    propertyRent: number;
    propertyMortgage: number;
    propertyInsurance: string | File | null;
    propertyContract: string | File | null;
}

type DocumentType = "InsuranceContracts" | "PropertyContracts";

export const generateFilePath = (property: PropertyData, type: DocumentType): string => {
    console.log("Generating file path for property:", property, "and type:", type);
        const user = $auth.get().user;
        if (!user) throw new Error("No authenticated user found");

          const file = type === "InsuranceContracts" ? property.propertyInsurance : property.propertyContract;
          if (!file) throw new Error(`No ${type === "InsuranceContracts" ? "insurance" : "contract"} file provided`);
          const fileName = file instanceof File ? file.name : file;
          const cleanProperty = useSlugify(property.propertyName);
          const date = new Date().toISOString().split("T")[0];
          const fileExtension = fileName.split(".").pop();
          const filePath = `${user.id}/${useSlugify(
            type
          )}/${cleanProperty}/${date}/${cleanProperty}.${fileExtension}`;

          return filePath;
}