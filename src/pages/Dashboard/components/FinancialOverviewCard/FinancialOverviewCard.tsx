import { NetIncomeCard } from "./NetIncomeCard/NetIncomeCard"
import { TotalMortgageCard } from "./TotalMortgageCard/TotalMortgageCard"
import { TotalRentCard } from "./TotalRentCard/TotalRentCard"
import { TotalTaxCard } from "./TotalTaxCard/TotalTaxCard"
import { useFetchFinancialData } from "./hooks/useFetchFinancialData"

export const FinancialOverviewCard = () => {
    const {totalRent, totalMortgage, totalTax, netIncome} = useFetchFinancialData();
    return (
        <div className="bg-white shadow-lg rounded-3xl p-8 h-full">
            <p className="text-3xl text-gray-800 font-bold">Financial Overview</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <TotalRentCard data={totalRent} />
                <TotalMortgageCard data={totalMortgage} />
                <TotalTaxCard data={totalTax} />
                <NetIncomeCard data={netIncome} />
            </div>
        </div>
    )
}