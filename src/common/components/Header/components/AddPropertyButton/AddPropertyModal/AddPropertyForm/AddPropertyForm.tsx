import { useForm, type SubmitHandler } from "react-hook-form";
import type { Property } from "@types";
import { useQueryClient } from "@tanstack/react-query";
import { addPropertySupaService } from "../../../../../../../services/SupabaseServices/AddPropertyService/AddPropertySupaService";

interface AddPropertyFormProps {
    onClose: () => void;
}

type AddPropertyFormValues = Pick<
    Property,
    "name" | "address" | "rent" | "mortgage" | "insurance_url" | "contract_url"
>;

export const AddPropertyForm = ({ onClose }: AddPropertyFormProps) => {
    const { register, handleSubmit, reset } = useForm<AddPropertyFormValues>();
    const queryClient = useQueryClient()

    const onSubmit: SubmitHandler<AddPropertyFormValues> = async (data) => {
        await addPropertySupaService(data as Property, async () => {
            await queryClient.invalidateQueries({ queryKey: ["properties"] })
            await queryClient.invalidateQueries({ queryKey: ['financials'] });
            reset();
            onClose();
        })
    };

    return (
        <form className="flex flex-col gap-4 p-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Property Name</label>
                <input placeholder="Example: Downtown Apartment" className="p-2 border border-gray-300 rounded-md" {...register("name", { required: true })} />
            </div>

            <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Address</label>
                <input placeholder="123 Real St." className="p-2 border border-gray-300 rounded-md" {...register("address")} />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Monthly Rent ($)</label>
                    <input type="number" placeholder="0" className="p-2 border border-gray-300 rounded-md" {...register("rent", { required: true })} />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Mortgage ($)</label>
                    <input type="number" placeholder="0" className="p-2 border border-gray-300 rounded-md" {...register("mortgage", { required: true })} />
                </div>
            </div>

            <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Insurance URL (Optional)</label>
                <input placeholder="https://..." className="p-2 border border-gray-300 rounded-md" {...register("insurance_url")} />
            </div>

            <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Contract URL (Optional)</label>
                <input placeholder="https://..." className="p-2 border border-gray-300 rounded-md" {...register("contract_url")} />
            </div>

            <button
                type="submit"
                className="mt-4 bg-blue-600 text-white py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
                Save Property
            </button>
        </form>
    );
};