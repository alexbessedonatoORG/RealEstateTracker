import { useRef } from "react"
import { FileUploadAndLinkService } from "../../../../SupabaseServices/FileUploadService/FileUploadSupaService";
import { MdOutlineFileUpload } from "react-icons/md";
import type { DocumentUploadProps } from "@types";

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
                className="flex items-center gap-2 text-blue-800 p-2 rounded font-bold cursor-pointer"
            >
                <MdOutlineFileUpload className="text-3xl" />
                Upload File
            </button>
        </div>
    );
}
