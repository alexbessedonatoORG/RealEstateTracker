import { TenantsInfoListSkeleton } from "../../../../../common/components/skeletons/TenantsInfoListSkeleton";
import { useFetchTenants } from "../useFetchTenants/useFetchTenants";

export const TenantsInfoList = () => {

    const { loading, tenants } = useFetchTenants();

    const rowStyle = "grid grid-cols-[3fr_2fr_2fr_2fr_1fr] gap-4 items-center px-8";

    if (loading) {
        return <TenantsInfoListSkeleton />;
    }

    if (tenants.length === 0) {
        return <div className="text-center text-gray-500 mt-8">No tenants found</div>;
    }

    console.log(tenants);

    return (
        <div className="border border-gray-200 rounded-3xl w-full pt-4 bg-gray-100 shadow-sm overflow-hidden mt-8">

            <div className={`${rowStyle} text-black text-sm uppercase border-b border-gray-200 pb-3`}>
                <p>Property</p>
                <p className="text-center">Name</p>
                <p className="text-center">Email</p>
                <p className="text-center">Phone</p>
                <p className="text-center">End of Contract</p>
            </div>

            <div className="divide-y divide-gray-200 bg-white">
                {tenants.map(t => (
                    <div key={t.id} className={`${rowStyle} py-4 hover:bg-gray-50 transition-colors`}>
                        <div className="flex flex-col min-w-0">
                            <p className="font-semibold text-gray-800 truncate">{t.property}</p>
                        </div>

                        <p className="text-center text-blue-950 font-medium truncate">{t.name}</p>
                        <p className="text-center text-blue-950 font-medium truncate">{t.email}</p>
                        <p className="text-center text-blue-950 font-medium">{t.phone}</p>
                        <p className="text-center text-blue-950 font-medium">{t.endOfContract}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TenantsInfoList
