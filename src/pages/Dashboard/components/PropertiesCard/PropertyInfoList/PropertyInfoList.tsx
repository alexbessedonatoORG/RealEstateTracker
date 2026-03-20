import { useFetchProperties } from "../../../../../common/hooks/useFetchProperties/useFetchProperties";
import { DocumentUpload } from "../../DocumentUpload/DocumentUpload";
import { SignedUrlLink } from "../../SignedURL/SignedUrlLink";
import { PropertyInfoListSkeleton } from "../../../../../common/components/skeletons/PropertyInfoListSkeleton";
import type { Property } from "@types";
import { useState } from "react";
import { PropertyDetailSideBar } from "./PropertyDetailSideBar/PropertyDetailSideBar";

export const PropertyInfoList = () => {
    const [isPropertyDetailOpen, setIsPropertyDetailOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
    const rowStyle = "grid grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-4 items-center px-8";

    const handleOpenPropertyDetail = (property: Property) => {
        setIsPropertyDetailOpen(true);
        setSelectedProperty(property);
    };

    const handleClosePropertyDetail = () => {
        setIsPropertyDetailOpen(false);
        setSelectedProperty(null);
    }

    const { loading, properties } = useFetchProperties();

    if (loading) return <PropertyInfoListSkeleton />;

    return (

        <div className="relative">

            {isPropertyDetailOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-xs z-100 transition-opacity"
                    onClick={handleClosePropertyDetail}
                />
            )}

            {/* 2. THE SIDEBAR - Rendered once, sits on top of overlay */}
            <div className={`fixed top-0 right-0 h-full w-150 bg-white shadow-2xl z-101 transform transition-transform duration-300 ${isPropertyDetailOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {selectedProperty && <PropertyDetailSideBar property={selectedProperty} onClose={handleClosePropertyDetail} />}
            </div>

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
                            onClick={() => handleOpenPropertyDetail(property)}
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
        </div>
    );
}