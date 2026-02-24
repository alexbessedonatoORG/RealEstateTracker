import { useForm, type SubmitHandler } from "react-hook-form";
import { addTenantSupaService } from "../../../../../../../../services/SupabaseServices/AddTenantService/addTenantSupaService";
import { useFetchProperties } from "../../../../../../../../common/hooks/useFetchProperties/useFetchProperties";
import type { AddTenantFormValues } from "@types";

interface AddTenantFormProps {
    onClose: () => void;
}

export const AddTenantForm = ({ onClose }: AddTenantFormProps) => {
    const { register, handleSubmit, reset, setValue } = useForm<AddTenantFormValues>();
    const { properties, loading } = useFetchProperties();

    const handlePropertyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = e.target.value;
        const selectedProperty = properties.find(p => p.id === selectedId);
        if (selectedProperty) {
            setValue("property_id", selectedProperty.id);
            setValue("property", selectedProperty.name || "");
        }
    };

    const onSubmit: SubmitHandler<AddTenantFormValues> = async (data) => {
        await addTenantSupaService(data, () => {
            reset();
            onClose();
        });
    };

    return (
        <form className="flex flex-col gap-4 p-2" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" {...register("property_id", { required: true })} />
            <input type="hidden" {...register("property", { required: true })} />
            <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Property</label>
                <select
                    className="p-2 border border-gray-300 rounded-md bg-gray-100"
                    onChange={handlePropertyChange}
                    defaultValue=""
                    disabled={loading}
                >
                    <option value="">{loading ? "Loading properties..." : "Select a property"}</option>
                    {properties.map((property) => (
                        <option key={property.id} value={property.id}>
                            {property.name || property.address || "Unnamed Property"}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Name</label>
                <input
                    placeholder="John Doe"
                    className="p-2 border border-gray-300 rounded-md"
                    {...register("name", { required: true })}
                />
            </div>

            <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Email</label>
                <input
                    type="email"
                    placeholder="tenant@example.com"
                    className="p-2 border border-gray-300 rounded-md"
                    {...register("email", { required: true })}
                />
            </div>

            <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Phone</label>
                <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="p-2 border border-gray-300 rounded-md"
                    {...register("phone", { required: true })}
                />
            </div>

            <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-600 mb-1 uppercase">End of Contract</label>
                <input
                    type="date"
                    className="p-2 border border-gray-300 rounded-md"
                    {...register("endOfContract", { required: true })}
                />
            </div>



            <button
                type="submit"
                className="mt-4 bg-blue-600 text-white py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
                Save Tenant
            </button>
        </form>
    );
};
