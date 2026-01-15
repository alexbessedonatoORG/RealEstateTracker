
import { useState } from "react";
import { AddPropertyModal } from "./AddPropertyModal/AddPropertyModal";

export const AddPropertyButton = () => {
    const [IsModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)
                }
                className="bg-blue-950 hover:bg-blue-900 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-95"
            >
                + Add Property
            </button >
            <AddPropertyModal
                isOpen={IsModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}
