import { useState } from "react";
import { AddTenantModal } from "./AddTenantModal/AddTenantModal";

export const AddTenantButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-950 hover:bg-blue-900 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-95"
            >
                + Add Tenant
            </button>
            <AddTenantModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};
