import { NetIncomeCard } from "./NetIncomeCard/NetIncomeCard"
import { TotalMortgageCard } from "./TotalMortgageCard/TotalMortgageCard"
import { TotalRentCard } from "./TotalRentCard/TotalRentCard"
import { TotalTaxCard } from "./TotalTaxCard/TotalTaxCard"
import { useFetchFinancialData } from "./hooks/useFetchFinancialData"
import { FinancialOverviewSkeleton } from "../../../../skeleton/FinancialOverviewSkeleton"

export const FinancialOverviewCard = () => {
    
    const {totalRent, totalMortgage, totalTax, netIncome, loading} = useFetchFinancialData();

    if (loading) return <FinancialOverviewSkeleton />;

    return (
        <div className="bg-white shadow-lg rounded-3xl p-8 h-full">
            <p className="text-3xl text-gray-800 font-bold">Financial Overview</p>
            <div className="mt-6 grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <TotalRentCard data={totalRent} />
                <TotalMortgageCard data={totalMortgage} />
                <TotalTaxCard data={totalTax} />
                <NetIncomeCard data={netIncome} />
            </div>
        </div>
    )
}