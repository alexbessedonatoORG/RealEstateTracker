import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../../../services/SupabaseServices/SupabaseClient";
import { $auth } from "../../../../../stores/AuthStore";
import { useStore } from "@nanostores/react";

export const useFetchFinancialData = () => {
    const { user } = useStore($auth);

    const { data, isLoading: loading } = useQuery({
        // 1. Give it a brand new key!
        queryKey: ['financials', user?.id],
        enabled: !!user?.id,

        queryFn: async () => {
            const { data: rpcData, error } = await supabase
                .rpc('get_user_financials', { search_user_id: user!.id });

            if (error) {
                console.error("Fetch error:", error.message);
                throw error;
            }

            // 2. Safely grab the first row
            const firstRow = rpcData?.[0] || {};

            // 3. Return a clean object with your math already done
            return {
                totalRent: firstRow.total_rent || 0,
                totalMortgage: firstRow.total_mortgage || 0,
                totalTax: 0, // TODO: Keeping your zero tax logic here
                netIncome: (firstRow.total_rent || 0) - (firstRow.total_mortgage || 0) - (firstRow.total_tax || 0)
            };
        }
    });

    // 4. Fallback to zeroes if the data is still loading
    const {
        totalRent = 0,
        totalMortgage = 0,
        totalTax = 0,
        netIncome = 0
    } = data || {};

    return { totalRent, totalMortgage, totalTax, netIncome, loading };
}