import { useEffect, useState } from "react";
import { supabase } from "../../../../../services/SupabaseServices/SupabaseClient";
import { $auth } from "../../../../../stores/AuthStore";
import { useStore } from "@nanostores/react";


interface Manager {
    id: string;
    user_id: string;
    name: string;
    company?: string;
    email?: string;
    phone?: string;
}

export const useFetchManagers = () => {

    const [managers, setManagers] = useState<Manager[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const { user } = useStore($auth);

    useEffect(() => {
        const fetchManagers = async () => {
            if (!user) {
                setLoading(false);
                return;
            }

            setLoading(true);

            const { data, error } = await supabase
                .from('property_managers')
                .select('*')
                .eq('owner_id', user.id);

            if (error) {
                console.error("Fetch managers error:", error.message);
                setLoading(false);
                return;
            }

            setManagers((data ?? []) as Manager[]);
            setLoading(false);
        };

        fetchManagers();
    }, [user]);

    return { loading, managers };
}