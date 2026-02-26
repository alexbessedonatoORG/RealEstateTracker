import type { Property } from "@types";
import { useForm } from '@tanstack/react-form'
import { useState } from "react";

interface PropertyDetailSideBarProps {
    property: Property;
    onClose: () => void;
}

export const PropertyDetailSideBar = ({ property, onClose }: PropertyDetailSideBarProps) => {
    const [hasInsuranceDocument, setHasInsuranceDocument] = useState(Boolean(property.insurance_url));
    const [hasContractDocument, setHasContractDocument] = useState(Boolean(property.contract_url));
    const [newInsuranceFileUploaded, setNewInsuranceFileUploaded] = useState(false);
    const [newContractFileUploaded, setNewContractFileUploaded] = useState(false);

    console.log(property)

    const PropertySliderForm = useForm({
        defaultValues: {
            propertyName: property.name ?? "",
            propertyAddress: property.address ?? "",
            propertyRent: property.rent ?? 0,
            propertyMortgage: property.mortgage ?? 0,
            propertyInsurance: (property.insurance_url ?? null) as string | File | null,
            propertyContract: (property.contract_url ?? null) as string | File | null,
        },
        onSubmit: async ({ value }) => {
            console.log(value)
        }
    })

    return (
        <aside className="h-full flex flex-col">
            <div className="flex items-center justify-between border-b border-gray-200 p-4">
                <h3 className="text-lg font-semibold text-gray-800">Edit Property details</h3>
                <button
                    type="button"
                    onClick={onClose}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                    Close
                </button>
            </div>

            <div className="p-4 ">

                <form className="flex flex-col gap-6" onSubmit={(e) => {
                    e.preventDefault();
                    PropertySliderForm.handleSubmit();
                }}>

                    <PropertySliderForm.Field name="propertyName">
                        {(field) => (
                            <div className="flex flex-col gap-2">
                                <label className="font-bold">
                                    Property Name:
                                </label>

                                <input className="border border-gray-400 rounded-md w-full p-2 text-gray-800"
                                    type="text"
                                    placeholder={property.name}
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </div>
                        )}
                    </PropertySliderForm.Field>

                    <PropertySliderForm.Field name="propertyAddress">
                        {(field) => (
                            <div className="flex flex-col gap-2">
                                <label className="font-bold">
                                    Property Address:
                                </label>

                                <input className="border border-gray-400 rounded-md w-full p-2 text-gray-800"
                                    type="text"
                                    placeholder={property.address}
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </div>
                        )}
                    </PropertySliderForm.Field>

                    <PropertySliderForm.Field name="propertyRent">
                        {(field) => (
                            <div className="flex flex-col gap-2">
                                <label className="font-bold">
                                    Property Rent:
                                </label>

                                <input className="border border-gray-400 rounded-md w-full p-2 text-gray-800"
                                    type="text"
                                    placeholder={`${property.rent ?? 0} €`}
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(Number(e.target.value))}
                                />
                            </div>
                        )}
                    </PropertySliderForm.Field>

                    <PropertySliderForm.Field name="propertyMortgage">
                        {(field) => (
                            <div className="flex flex-col gap-2">
                                <label className="font-bold">
                                    Property Mortgage:
                                </label>

                                <input className="border border-gray-400 rounded-md w-full p-2 text-gray-800"
                                    type="text"
                                    placeholder={`${property.mortgage ?? 0} €`}
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(Number(e.target.value))}
                                />
                            </div>
                        )}
                    </PropertySliderForm.Field>

                    <PropertySliderForm.Field name="propertyInsurance">
                        {(field) => {
                            return (
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold">
                                        Property Insurance:
                                    </label>

                                    {hasInsuranceDocument ? (
                                        <div
                                            onClick={() => { setHasInsuranceDocument(false); field.handleChange(null); }}
                                            className={`flex items-center justify-start w-full px-4 py-3 text-sm font-medium border rounded-md shadow-sm cursor-pointer transition-all ${newInsuranceFileUploaded
                                                ? "bg-green-50 border-green-200 text-green-800 hover:bg-green-100 hover:border-green-300"
                                                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-400 hover:text-blue-600"
                                                }`}
                                        >
                                            <span className="mr-2 text-lg">
                                                {newInsuranceFileUploaded ? "📄" : "📁"}
                                            </span>
                                            <span className="truncate">
                                                {newInsuranceFileUploaded
                                                    ? "New document ready to upload (click to change)"
                                                    : "Existing document (click to replace)"}
                                            </span>
                                        </div>

                                    ) : (
                                        <input className="block w-full text-sm text-gray-600 border border-gray-400 rounded-md cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:cursor-pointer file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
                                            type="file"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    field.handleChange(file);
                                                    setHasInsuranceDocument(true);
                                                    setNewInsuranceFileUploaded(true);
                                                }
                                            }}
                                        />
                                    )}
                                </div>
                            )
                        }}
                    </PropertySliderForm.Field>

                    <PropertySliderForm.Field name="propertyContract">
                        {(field) => {
                            return (
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold">
                                        Property Contract:
                                    </label>

                                    {hasContractDocument ? (
                                        <div
                                            onClick={() => { setHasContractDocument(false); field.handleChange(null); }}
                                            className={`flex items-center justify-start w-full px-4 py-3 text-sm font-medium border rounded-md shadow-sm cursor-pointer transition-all ${newContractFileUploaded
                                                ? "bg-green-50 border-green-200 text-green-800 hover:bg-green-100 hover:border-green-300"
                                                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-400 hover:text-blue-600"
                                                }`}
                                        >
                                            <span className="mr-2 text-lg">
                                                {newContractFileUploaded ? "📄" : "📁"}
                                            </span>
                                            <span className="truncate">
                                                {newContractFileUploaded
                                                    ? "New document ready to upload (click to change)"
                                                    : "Existing document (click to replace)"}
                                            </span>
                                        </div>

                                    ) : (
                                        <input className="block w-full text-sm text-gray-600 border border-gray-400 rounded-md cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:cursor-pointer file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
                                            type="file"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    field.handleChange(file);
                                                    setHasContractDocument(true);
                                                    setNewContractFileUploaded(true);
                                                }
                                            }}
                                        />
                                    )}
                                </div>
                            )
                        }}
                    </PropertySliderForm.Field>
                    <div className="pt-4 border-t border-gray-200 mt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-950 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-md shadow transition-colors"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>



            </div>
        </aside>
    );
};