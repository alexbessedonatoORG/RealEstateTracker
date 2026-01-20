import { useState } from "react";
import { AddManagerModal } from "./AddManagerModal/AddManagerModal";

export const AddManagerButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-950 hover:bg-blue-900 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm active:scale-95"
            >
                + Add Manager
            </button>
            <AddManagerModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};
