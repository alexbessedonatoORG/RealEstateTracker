import { useGetSignedURL } from "../../common/hooks/useGetSignedURL/useGetSignedURL";

interface SignedUrlLinkProps {
    propertyURL: string;
    type?: "PropertyContracts" | "InsuranceContracts";
}

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
            className="text-blue-500 hover:underline text-xs font-bold cursor-pointer"
        >
            VIEW INSURANCE
        </a>
    ) : (
        <a
            href="#"
            onClick={handleViewClick}
            className="text-blue-500 hover:underline text-xs font-bold cursor-pointer"
        >
            VIEW CONTRACT
        </a>
    );
};