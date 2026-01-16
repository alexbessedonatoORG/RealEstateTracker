import { PropertiesCard } from "./components/PropertiesCard/PropertiesCard"
import { FinancialOverviewCard } from "./components/FinancialOverviewCard/FinancialOverviewCard"
import { ManagerCard } from "./components/ManagerCard/ManagerCard"
import { TenantsCard } from "./components/TenantsCard/TenantsCard"

export const Dashboard = () => {
    return (
        <div className="min-h-screen w-full bg-gray-100">
            <PropertiesCard />
            <div className="flex"> 
                   <div className="flex-1 p-6 self-start">
                    <FinancialOverviewCard/>
                </div>
                   <div className="flex-1 p-6 self-start">
                    <ManagerCard/>
                </div>
            </div>
            <div className="p-6">
                <TenantsCard/>
            </div>
            
        </div>
    )
}
