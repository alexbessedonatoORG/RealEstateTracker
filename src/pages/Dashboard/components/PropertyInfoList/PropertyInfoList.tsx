import { useFetchProperties } from "../../../../common/hooks/useFetchProperties/useFetchProperties";
import { DocumentUpload } from "../DocumentUpload/DocumentUpload";
import { SignedUrlLink } from "../../../../SupabaseServices/SignedURL/SignedUrlLink";

interface Property {
    id: string;
    user_id: string;
    address?: string;
    name?: string;
    rent?: number;
    mortgage?: number;
    insurance_url?: string;
    contract_url?: string;
}

export const PropertyInfoList = () => {

    const rowStyle = "grid grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-2 pt-4 items-center";

    const { loading, properties } = useFetchProperties();

    if (loading) return <div className="p-10 text-center">Loading properties...</div>;

    return (
        <div className="pt-14 w-full">

            <div className={`${rowStyle} font-bold text-gray-700 text-xs uppercase tracking-widest`}>
                <p>Property Details</p>
                <p className="text-center">Rent</p>
                <p className="text-center">Mortgage</p>
                <p className="text-center">Insurance</p>
                <p className="text-center">Contract</p>
            </div>

            {properties.map((property: Property) => (
                <div key={property.id} className={`${rowStyle}`}>
                    <div className="flex flex-col min-w-0">
                        <p className="font-semibold text-gray-800 truncate">{property.name || "Untitled"}</p>
                        <p className="truncate text-blue-500 text-sm italic">
                            {property.address || "No address provided"}
                        </p>
                    </div>

                    <p className="text-center text-green-600">
                        ${property.rent?.toLocaleString() ?? '0'}
                    </p>
                    <p className="text-center text-red-500">
                        ${property.mortgage?.toLocaleString() ?? '0'}
                    </p>

                    <div className="flex justify-center">
                        {property.insurance_url ? (
                            <SignedUrlLink propertyURL={property.insurance_url} type="InsuranceContracts" />
                        ) : <DocumentUpload propertyId={property.id} property={property.name ?? ""} type="InsuranceContracts" />}
                    </div>

                    <div className="flex justify-center">
                        {property.contract_url ? (
                            <SignedUrlLink propertyURL={property.contract_url} type="PropertyContracts" />
                        ) : <DocumentUpload propertyId={property.id} property={property.name ?? ""} type="PropertyContracts" />}
                    </div>
                </div>
            ))}
        </div>
    );
}