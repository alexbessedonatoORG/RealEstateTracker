import { AddManagerForm } from "./AddManagerForm/AddManagerForm";
import type { AddManagerModalProps } from "@types";

export const AddManagerModal = ({ isOpen, onClose }: AddManagerModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="flex items-center justify-center fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl ring-1 ring-black/5">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Property Manager</h2>
                <AddManagerForm onClose={onClose} />
                <button onClick={onClose} className="mt-4 text-sm text-gray-500 underline">Close</button>
            </div>
        </div>
    );
};
