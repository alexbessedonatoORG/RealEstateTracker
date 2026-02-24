import type { Property } from "@types";

interface PropertyDetailSideBarProps {
    property: Property;
    onClose: () => void;
}

export const PropertyDetailSideBar = ({ property, onClose }: PropertyDetailSideBarProps) => {
    return (
        <aside className="h-full flex flex-col">
            <div className="flex items-center justify-between border-b border-gray-200 p-4">
                <h3 className="text-lg font-semibold text-gray-800">Property details</h3>
                <button
                    type="button"
                    onClick={onClose}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                    Close
                </button>
            </div>

            <div className="p-4 space-y-4 text-sm text-gray-700">
                <div>
                    <p className="text-xs uppercase text-gray-500">Name</p>
                    <p className="font-medium text-gray-900">{property.name || "Untitled"}</p>
                </div>

                <div>
                    <p className="text-xs uppercase text-gray-500">Address</p>
                    <p>{property.address || "No address provided"}</p>
                </div>

                <div>
                    <p className="text-xs uppercase text-gray-500">Rent</p>
                    <p className="font-medium">${property.rent?.toLocaleString() ?? "0"}</p>
                </div>

                <div>
                    <p className="text-xs uppercase text-gray-500">Mortgage</p>
                    <p className="font-medium">${property.mortgage?.toLocaleString() ?? "0"}</p>
                </div>
            </div>
        </aside>
    );
};