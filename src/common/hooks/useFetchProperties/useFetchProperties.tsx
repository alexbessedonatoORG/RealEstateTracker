import React, { useEffect } from 'react'
import { supabase } from '../../../services/SupabaseServices/SupabaseClient';
import { useStore } from '@nanostores/react';
import { $auth } from '../../../stores/AuthStore';
import type { Property } from '@types';

export const useFetchProperties = () => {
    const [properties, setProperties] = React.useState<Property[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    const { user } = useStore($auth);

    useEffect(() => {
        const fetchProperties = async () => {
            if (!user) {
                setLoading(false);
                return;
            }

            setLoading(true);
            const { data, error } = await supabase
                .from('Property')
                .select('*')
                .eq('user_id', user.id)
                .order('name', { ascending: true });

            if (error) {
                console.error("Fetch error:", error.message);
            } else if (data) {
                setProperties(data as Property[]);
            }
            setLoading(false);
        };

        fetchProperties();
    }, [user]);

    return { loading, properties };
}