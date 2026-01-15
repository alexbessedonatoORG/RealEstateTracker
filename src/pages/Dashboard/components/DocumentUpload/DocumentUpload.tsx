import { useRef } from "react"
import { FileUploadAndLinkService } from "../../../../SupabaseServices/FileUploadService/FileUploadSupaService";

interface DocumentUploadProps {
    propertyId: string;
    property: string;
    type?: "PropertyContracts" | "InsuranceContracts";
}

export const DocumentUpload = ({ propertyId, property, type }: DocumentUploadProps) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            await FileUploadAndLinkService({ propertyId, property, file, type });
        }
    };

    return (
        <div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
            />

            <button
                onClick={handleButtonClick}
                className="text-blue-500 p-2 rounded underline font-bold"
            >
                Upload File
            </button>
        </div>
    );
}
