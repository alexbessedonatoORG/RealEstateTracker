import { useState, useEffect } from "react";
import { supabase } from "../../../../../SupabaseServices/SupabaseClient";
import { $auth } from "../../../../../stores/AuthStore";
import { useStore } from "@nanostores/react";

export const useFetchFinancialData = () => {
    const [totalRent, setTotalRent] = useState<number>(0);
    const [totalMortgage, setTotalMortgage] = useState<number>(0);
    const [totalTax, setTotalTax] = useState<number>(0);
    const [netIncome, setNetIncome] = useState<number>(0);
    
    const { user, loading } = useStore($auth);

    useEffect(() => {
        if (loading || !user) return;

        const fetchData = async () => {
            const { data, error } = await supabase
            .rpc('get_user_financials', { search_user_id: user.id });                


            if (error) {
                console.error("Fetch error:", error.message);
                return;
            }      

            setTotalRent(data[0]?.total_rent || 0);
            setTotalMortgage(data[0]?.total_mortgage || 0);
            //TODO: TOTAL TAX IS BEING SET TO ZERO
            setTotalTax(0);
            setNetIncome((data[0]?.total_rent || 0) - (data[0]?.total_mortgage || 0) - (data[0]?.total_tax || 0));

        };

        fetchData();
    }, [user, loading, totalTax]);


    return { totalRent, totalMortgage, totalTax, netIncome };
}