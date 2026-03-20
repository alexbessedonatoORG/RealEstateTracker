import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../../../services/SupabaseServices/SupabaseClient";
import { $auth } from "../../../../../stores/AuthStore";
import { useStore } from "@nanostores/react";
import type { Tenant, TenantRow } from "@types";

export const useFetchTenants = () => {
    const { user } = useStore($auth);

    const { data: tenants = [], isLoading: loading } = useQuery({
        queryKey: ['tenants'],
        enabled: !!user?.id,
        queryFn: async () => {
            const { data, error } = await supabase
                .from('tenants')
                .select(`
                    *,
                    property!inner (
                        user_id,
                        name
                    )
                `)
                .eq('property.user_id', user!.id);

            if (error) {
                console.error("Error fetching tenants:", error.message);
                throw error;
            }

            const mappedTenants: Tenant[] = (data as TenantRow[] ?? []).map((tennant) => ({
                id: tennant.id,
                propertyId: tennant.property_id,
                property: tennant.property?.name || "",
                fullName: tennant.full_name,
                email: tennant.email,
                phone: tennant.phone,
                createdAt: tennant.created_at,
                endOfContract: tennant.end_of_contract,
            }));

            return mappedTenants;
        }
    });

    return { loading, tenants };
};