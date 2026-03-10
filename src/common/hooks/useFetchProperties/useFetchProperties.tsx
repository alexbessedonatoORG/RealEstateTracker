import { useQuery } from '@tanstack/react-query'; // Make sure this is imported!
import { supabase } from '../../../services/SupabaseServices/SupabaseClient';
import { useStore } from '@nanostores/react';
import { $auth } from '../../../stores/AuthStore';
import type { Property } from '@types';

export const useFetchProperties = () => {
    const { user } = useStore($auth);

    const { data: properties = [], isLoading: loading } = useQuery({
        queryKey: ['properties', user?.id],
        enabled: !!user?.id,

        queryFn: async () => {
            const { data, error } = await supabase
                .from('property')
                .select('*')
                .eq('user_id', user!.id)
                .order('name', { ascending: true });

            if (error) throw error;

            return data as Property[];
        }
    });

    return { loading, properties };
};