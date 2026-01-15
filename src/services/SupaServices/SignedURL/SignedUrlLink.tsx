import { useGetSignedURL } from "../../../shared/hooks/useGetSignedURL/useGetSignedURL";

interface SignedUrlLinkProps {
    propertyInsuranceURL: string;
}

export const SignedUrlLink = ({ propertyInsuranceURL }: SignedUrlLinkProps) => {

    const handleViewClick = async (e: React.MouseEvent) => {
        e.preventDefault();

        try {
            const url = await useGetSignedURL(propertyInsuranceURL);
            if (url) {
                window.open(url, "_blank");
            }
        } catch (err) {
            alert("Could not generate secure link. Check your permissions.");
        }
    };

    return (
        <a
            href="#"
            onClick={handleViewClick}
            className="text-blue-500 hover:underline text-xs font-bold cursor-pointer"
        >
            VIEW INSURANCE
        </a>
    );
};