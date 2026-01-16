import { PropertiesCard } from "./components/PropertiesCard/PropertiesCard"
import { FinancialOverviewCard } from "./components/FinancialOverviewCard/FinancialOverviewCard"
import { ManagerAndTenantsCard } from "./components/ManagerAndTenantsCard/ManagerAndTenantsCard"

export const Dashboard = () => {
    return (
        <div className="min-h-screen w-full bg-gray-100">
            <PropertiesCard />
            <div className="flex"> 
                <div className="flex-1 p-6">
                    <FinancialOverviewCard/>
                </div>
                <div className="flex-1 p-6">
                    <ManagerAndTenantsCard/>
                </div>
            </div>
        </div>
    )
}
