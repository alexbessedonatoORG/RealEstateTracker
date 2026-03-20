import { useForm } from "@tanstack/react-form";
import { addTenantSupaService } from "../../../../../../../../services/SupabaseServices/AddTenantService/addTenantSupaService";
import { useFetchProperties } from "../../../../../../../../common/hooks/useFetchProperties/useFetchProperties";
import type { Tenant } from "@types";
import { useQueryClient } from "@tanstack/react-query";

interface AddTenantFormProps {
    onClose: () => void;
}

export const AddTenantForm = ({ onClose }: AddTenantFormProps) => {
    const { properties, loading } = useFetchProperties();
    const queryClient = useQueryClient();
    const form = useForm({
        defaultValues: {
            propertyId: "",
            fullName: "",
            email: "",
            phone: "",
            endOfContract: "",
        } as Omit<Tenant, "id" | "createdAt" | "property">,
        onSubmit: async ({ value }) => {
            console.log("data being set", value);
            await addTenantSupaService(value, async () => {
                await queryClient.invalidateQueries({ queryKey: ["tenants"] });
                form.reset();
                onClose();
            });
        },
    });

    return (
        <form
            className="flex flex-col gap-4 p-2"
            onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
            }}
        >

            <form.Field name="propertyId">
                {(field) => (
                    <div className="flex flex-col">
                        <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Property</label>
                        <select
                            className="p-2 border border-gray-300 rounded-md bg-gray-100"
                            onChange={(e) => {
                                field.handleChange(e.target.value);
                            }}
                            value={field.state.value}
                            disabled={loading}
                            required
                        >
                            <option value="">{loading ? "Loading properties..." : "Select a property"}</option>
                            {properties.map((property) => (
                                <option key={property.id} value={property.id}>
                                    {property.name || property.address || "Unnamed Property"}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </form.Field>

            <form.Field name="fullName">
                {(field) => (
                    <div className="flex flex-col">
                        <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Name</label>
                        <input
                            placeholder="John Doe"
                            className="p-2 border border-gray-300 rounded-md"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            required
                        />
                    </div>
                )}
            </form.Field>

            <form.Field name="email">
                {(field) => (
                    <div className="flex flex-col">
                        <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Email</label>
                        <input
                            type="email"
                            placeholder="tenant@example.com"
                            className="p-2 border border-gray-300 rounded-md"
                            value={field.state.value ?? ""}
                            onChange={(e) => field.handleChange(e.target.value)}
                            required
                        />
                    </div>
                )}
            </form.Field>

            <form.Field name="phone">
                {(field) => (
                    <div className="flex flex-col">
                        <label className="text-xs font-bold text-gray-600 mb-1 uppercase">Phone</label>
                        <input
                            type="tel"
                            placeholder="(555) 123-4567"
                            className="p-2 border border-gray-300 rounded-md"
                            value={field.state.value ?? ""}
                            onChange={(e) => field.handleChange(e.target.value)}
                            required
                        />
                    </div>
                )}
            </form.Field>

            <form.Field name="endOfContract">
                {(field) => (
                    <div className="flex flex-col">
                        <label className="text-xs font-bold text-gray-600 mb-1 uppercase">End of Contract</label>
                        <input
                            type="date"
                            className="p-2 border border-gray-300 rounded-md"
                            value={field.state.value ?? ""}
                            onChange={(e) => field.handleChange(e.target.value)}
                            required
                        />
                    </div>
                )}
            </form.Field>



            <button
                type="submit"
                className="mt-4 bg-blue-600 text-white py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
                Save Tenant
            </button>
        </form>
    );
};
