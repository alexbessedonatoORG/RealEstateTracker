import { useForm } from '@tanstack/react-form'
import { useQueryClient } from "@tanstack/react-query";
import { addPropertySupaService } from "../../../../../../../services/SupabaseServices/AddPropertyService/AddPropertySupaService";

interface AddPropertyFormProps {
    onClose: () => void;
}


export const AddPropertyForm = ({ onClose }: AddPropertyFormProps) => {
    const queryClient = useQueryClient()

    const form = useForm({
        defaultValues: {
            name: "",
            address: "",
            rent: 0,
            mortgage: 0,
            insurance_url: null as File | null,
            contract_url: null as File | null,
        },
        onSubmit: async ({ value }) => {
            await addPropertySupaService(value, async () => {
                await queryClient.invalidateQueries({ queryKey: ["properties"] })
                await queryClient.invalidateQueries({ queryKey: ['financials'] });
                form.reset();
                onClose();
            })
        },
    })


    return (

        <form className="flex flex-col gap-4 p-2" onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();

        }}>

            <form.Field name="name">
                {(field) => (
                    <div className="flex flex-col">
                        <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Property Name</label>
                        <input
                            placeholder="Example: Downtown Apartment"
                            className="p-2 border border-gray-300 rounded-md"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            required
                        />
                    </div>

                )}
            </form.Field>

            <form.Field name="address">
                {(field) => (
                    <div className="flex flex-col">
                        <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Address</label>
                        <input
                            placeholder="123 Real St."
                            className="p-2 border border-gray-300 rounded-md"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                    </div>
                )}
            </form.Field>

            <div className="grid grid-cols-2 gap-4">
                <form.Field name="rent">
                    {(field) => (
                        <div className="flex flex-col">
                            <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Monthly Rent ($)</label>
                            <input
                                type="number"
                                placeholder="0"
                                className="p-2 border border-gray-300 rounded-md"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(Number(e.target.value))}
                                required
                            />
                        </div>
                    )}
                </form.Field>

                <form.Field name="mortgage">
                    {(field) => (
                        <div className="flex flex-col">
                            <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Mortgage ($)</label>
                            <input
                                type="number"
                                placeholder="0"
                                className="p-2 border border-gray-300 rounded-md"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(Number(e.target.value))}
                                required
                            />
                        </div>
                    )}
                </form.Field>
            </div>

            <form.Field name="insurance_url">
                {(field) => {
                    return (
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Insurance Document (Optional)</label>

                            <input
                                className="block w-full text-sm text-gray-600 border border-gray-400 rounded-md cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:cursor-pointer file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
                                type="file"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    field.handleChange(file ?? null);
                                }}
                            />

                            {field.state.value && (
                                <div className="flex items-center justify-start w-full px-4 py-3 text-sm font-medium border rounded-md shadow-sm bg-green-50 border-green-200 text-green-800">
                                    <span className="mr-2 text-lg">📄</span>
                                    <span className="truncate">Selected: {field.state.value.name}</span>
                                </div>
                            )}
                        </div>
                    )
                }}
            </form.Field>

            <form.Field name="contract_url">
                {(field) => {
                    return (
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Contract Document (Optional)</label>

                            <input
                                className="block w-full text-sm text-gray-600 border border-gray-400 rounded-md cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:cursor-pointer file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
                                type="file"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    field.handleChange(file ?? null);
                                }}
                            />

                            {field.state.value && (
                                <div className="flex items-center justify-start w-full px-4 py-3 text-sm font-medium border rounded-md shadow-sm bg-green-50 border-green-200 text-green-800">
                                    <span className="mr-2 text-lg">📄</span>
                                    <span className="truncate">Selected: {field.state.value.name}</span>
                                </div>
                            )}
                        </div>
                    )
                }}
            </form.Field>

            <button
                type="submit"
                className="mt-4 bg-blue-600 text-white py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
                Save Property
            </button>
        </form >
    );
};