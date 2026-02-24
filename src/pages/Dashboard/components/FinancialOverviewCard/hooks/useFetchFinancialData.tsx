import { useState, useEffect } from "react";
import { supabase } from "../../../../../services/SupabaseServices/SupabaseClient";
import { $auth } from "../../../../../stores/AuthStore";
import { useStore } from "@nanostores/react";

export const useFetchFinancialData = () => {
    const [totalRent, setTotalRent] = useState<number>(0);
    const [totalMortgage, setTotalMortgage] = useState<number>(0);
    const [totalTax, setTotalTax] = useState<number>(0);
    const [netIncome, setNetIncome] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    const { user } = useStore($auth);

    useEffect(() => {
        if (!user) {
            setLoading(false);
            return;
        }

        let cancelled = false;

        const fetchData = async () => {
            try {
                setLoading(true);

                const { data, error } = await supabase
                    .rpc('get_user_financials', { search_user_id: user.id });

                if (cancelled) return;

                if (error) {
                    console.error("Fetch error:", error.message);
                    return;
                }

                setTotalRent(data[0]?.total_rent || 0);
                setTotalMortgage(data[0]?.total_mortgage || 0);
                //TODO: TOTAL TAX IS BEING SET TO ZERO
                setTotalTax(0);
                setNetIncome(
                    (data[0]?.total_rent || 0) -
                    (data[0]?.total_mortgage || 0) -
                    (data[0]?.total_tax || 0)
                );
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        fetchData();

        return () => {
            cancelled = true;
        };
    }, [user]);


    return { totalRent, totalMortgage, totalTax, netIncome, loading };
}