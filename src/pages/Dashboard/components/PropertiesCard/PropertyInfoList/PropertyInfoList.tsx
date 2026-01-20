import { useFetchProperties } from "../../../../../common/hooks/useFetchProperties/useFetchProperties";
import { DocumentUpload } from "../../DocumentUpload/DocumentUpload";
import { SignedUrlLink } from "../../../../../SupabaseServices/SignedURL/SignedUrlLink";
import type { Property } from "@types";

export const PropertyInfoList = () => {
    const rowStyle = "grid grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-4 items-center px-8";

    const { loading, properties } = useFetchProperties();

    if (loading) return <div className="p-10 text-center text-gray-500">Loading properties...</div>;

    return (
       
        <div className="border border-gray-200 rounded-3xl w-full pt-4 bg-gray-100 shadow-sm overflow-hidden mt-8">

            <div className={`${rowStyle} text-black text-md uppercase border-b border-gray-200 pb-4`}>
                <p>Property</p>
                <p className="text-center">Rent</p>
                <p className="text-center">Mortgage</p>
                <p className="text-center">Insurance</p>
                <p className="text-center">Contract</p>
            </div>

            <div className="divide-y divide-gray-200 bg-white">
                {properties.map((property: Property) => (
                    <div
                        key={property.id}
                        className={`${rowStyle} py-5 hover:bg-gray-200 transition-colors`}
                    >
                        <div className="flex flex-col min-w-0">
                            <p className="font-semibold text-gray-800 truncate">
                                {property.name || "Untitled"}
                            </p>
                            <p className="truncate text-blue-800 text-xs italic mt-0.5">
                                {property.address || "No address provided"}
                            </p>
                        </div>

                        <p className="text-center text-blue-950 font-medium">
                            ${property.rent?.toLocaleString() ?? '0'}
                        </p>
                        <p className="text-center text-blue-950 font-medium">
                            ${property.mortgage?.toLocaleString() ?? '0'}
                        </p>

                        <div className="flex justify-center">
                            {property.insurance_url ? (
                                <SignedUrlLink propertyURL={property.insurance_url} type="InsuranceContracts" />
                            ) : (
                                <DocumentUpload
                                    propertyId={property.id}
                                    property={property.name ?? ""}
                                    type="InsuranceContracts"
                                />
                            )}
                        </div>

                        <div className="flex justify-center">
                            {property.contract_url ? (
                                <SignedUrlLink propertyURL={property.contract_url} type="PropertyContracts" />
                            ) : (
                                <DocumentUpload
                                    propertyId={property.id}
                                    property={property.name ?? ""}
                                    type="PropertyContracts"
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}