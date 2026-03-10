import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../../../services/SupabaseServices/SupabaseClient";
import { $auth } from "../../../../../stores/AuthStore";
import { useStore } from "@nanostores/react";
import type { Tenant } from "@types";

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

            const mappedTenants: Tenant[] = (data ?? []).map((t: any) => ({
                id: t.id,
                property: t.property?.name || "",
                property_id: t.property_id,
                name: t.full_name,
                email: t.email,
                phone: t.phone,
                endOfContract: t.end_of_contract,
            }));

            return mappedTenants;
        }
    });

    return { loading, tenants };
};