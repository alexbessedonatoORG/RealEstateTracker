import { useEffect, useState } from "react";
import { supabase } from "../../../../../SupabaseServices/SupabaseClient";
import { $auth } from "../../../../../stores/AuthStore";
import { useStore } from "@nanostores/react";
import type { Tenant } from "@types";

export const useFetchTenants = () => {
    const [tenants, setTenants] = useState<Tenant[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { user } = useStore($auth);

    useEffect(() => {
        const fetchTenants = async () => {
            if (!user?.id) {
                setLoading(false);
                return;
            }

            setLoading(true);

            const { data, error } = await supabase
                .from('tenants')
                .select(`
                    *,
                    Property!inner (
                        user_id,
                        name
                    )
                `)
                .eq('Property.user_id', user.id);

            if (error) {
                console.error("Error fetching tenants:", error.message);
                setLoading(false);
                return;
            }

            const mappedTenants: Tenant[] = (data ?? []).map((t: { id: string; property_id: string; full_name: string; email: string; phone: string; end_of_contract: string; Property: { name: string } }) => ({
                id: t.id,
                property: t.Property?.name || "",
                property_id: t.property_id,
                name: t.full_name,
                email: t.email,
                phone: t.phone,
                endOfContract: t.end_of_contract,
            }));

            setTenants(mappedTenants);
            setLoading(false);
        };

        fetchTenants();
    }, [user?.id]);

    return { loading, tenants };
}
