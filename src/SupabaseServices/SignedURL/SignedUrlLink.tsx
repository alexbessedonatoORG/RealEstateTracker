import { useGetSignedURL } from "../../common/hooks/useGetSignedURL/useGetSignedURL";
import { LiaFileContractSolid } from "react-icons/lia";
import { FaRegEye } from "react-icons/fa";
import type { SignedUrlLinkProps } from "@types";

export const SignedUrlLink = ({ propertyURL, type }: SignedUrlLinkProps) => {

    const handleViewClick = async (e: React.MouseEvent) => {
        e.preventDefault();

        try {
            const url = await useGetSignedURL(propertyURL);
            if (url) {
                window.open(url, "_blank");
            }
        } catch (err) {
            console.error(err);
            alert("Could not generate secure link. Check your permissions.");
        }
    };

    return type === "InsuranceContracts" ? (
        <a
            href="#"
            onClick={handleViewClick}
            className="flex items-center gap-2 text-blue-800 hover:underline font-bold cursor-pointer"
        >
            <FaRegEye className="text-xl" />
            View Insurance
        </a>
    ) : (
        <a
            href="#"
            onClick={handleViewClick}
            className="flex items-center gap-2 text-blue-800 hover:underline font-bold cursor-pointer"
        >
            <LiaFileContractSolid className="text-xl" />
            View Contract
        </a>
    );
};