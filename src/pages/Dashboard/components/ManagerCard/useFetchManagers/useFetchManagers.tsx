// useFetchManagers.ts
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../../../services/SupabaseServices/SupabaseClient";
import { $auth } from "../../../../../stores/AuthStore";

export const useFetchManagers = () => {
    const { user } = $auth.get();
    const { data: managers = [], isLoading: loading } = useQuery({
        queryKey: ['managers', user?.id],
        enabled: !!user?.id,
        queryFn: async () => {
            if (!user) return [];

            const { data, error } = await supabase
                .from('property_managers')
                .select('*')
                .eq('owner_id', user.id);

            if (error) throw error;
            return data;
        }
    });

    return { loading, managers };
};