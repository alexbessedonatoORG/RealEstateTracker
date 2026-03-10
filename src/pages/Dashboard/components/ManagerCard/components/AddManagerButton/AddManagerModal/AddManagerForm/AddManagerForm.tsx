import { useForm, type SubmitHandler } from "react-hook-form";
import { addManagerSupaService } from "../../../../../../../../services/SupabaseServices/AddManagerService/addManagerSupaService";
import type { AddManagerFormValues } from "@types";
import { useQueryClient } from "@tanstack/react-query";

interface AddManagerFormProps {
    onClose: () => void;
}

export const AddManagerForm = ({ onClose }: AddManagerFormProps) => {
    const { register, handleSubmit, reset } = useForm<AddManagerFormValues>();
    const queryClient = useQueryClient();

    const onSubmit: SubmitHandler<AddManagerFormValues> = async (data) => {
        await addManagerSupaService(data, async () => {
            await queryClient.invalidateQueries({ queryKey: ['managers'] });
            reset();
            onClose();
        });
    };

    return (
        <form className="flex flex-col gap-4 p-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Name</label>
                <input
                    placeholder="John Doe"
                    className="p-2 border border-gray-300 rounded-md"
                    {...register("name", { required: true })}
                />
            </div>

            <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Company (Optional)</label>
                <input
                    placeholder="ABC Property Management"
                    className="p-2 border border-gray-300 rounded-md"
                    {...register("company")}
                />
            </div>

            <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Email (Optional)</label>
                <input
                    type="email"
                    placeholder="manager@example.com"
                    className="p-2 border border-gray-300 rounded-md"
                    {...register("email")}
                />
            </div>

            <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Phone (Optional)</label>
                <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="p-2 border border-gray-300 rounded-md"
                    {...register("phone")}
                />
            </div>

            <button
                type="submit"
                className="mt-4 bg-blue-600 text-white py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
                Save Manager
            </button>
        </form>
    );
};
