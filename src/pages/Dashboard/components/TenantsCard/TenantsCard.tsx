import TenantsInfoList from "./TenantsInfoList/TenantsInfoList";

export const TenantsCard = () => {
    return (
        <div className="bg-white w-full shadow-lg rounded-3xl p-8">
            <p className="text-3xl text-gray-800 font-bold">Tenants</p>
            <TenantsInfoList />
        </div>
    )
}

export default TenantsCard
