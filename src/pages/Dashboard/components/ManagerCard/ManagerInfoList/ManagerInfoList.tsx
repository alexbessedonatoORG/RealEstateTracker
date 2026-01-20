import { ManagerInfoListSkeleton } from "../../../../../skeleton/ManagerInfoListSkeleton";
import { useFetchManagers } from "../useFetchManagers/useFetchManagers";

export const ManagerInfoList = () => {

    const { loading, managers } = useFetchManagers();
    console.log(managers);

    const rowStyle = "grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 items-center px-8";

    if (loading) {
        return <ManagerInfoListSkeleton />;
    }

    if (managers.length === 0) {
        return <div className="text-center text-gray-500">No managers found</div>;
    }

    return (
        <div className="border border-gray-200 rounded-3xl w-full pt-4 bg-gray-100 shadow-sm overflow-hidden mt-8">

            <div className={`${rowStyle} text-black text-md uppercase border-b border-gray-200 pb-4`}>
                <p>Name</p>
                <p className="text-center">Company</p>
                <p className="text-center">Email</p>
                <p className="text-center">Phone</p>
            </div>

            <div className="divide-y divide-gray-200 bg-white">
                {managers.map((manager) => (
                    <div
                        key={manager.id}
                        className={`${rowStyle} py-5 hover:bg-gray-50 transition-colors`}
                    >
                        <div className="flex flex-col min-w-0">
                            <p className="font-semibold text-gray-800 truncate">
                                {manager.name}
                            </p>
                            <p className="truncate text-blue-800 text-xs italic mt-0.5">
                                Manager
                            </p>
                        </div>

                        <p className="text-center text-blue-950 font-medium truncate">
                            {manager.company ?? "—"}
                        </p>
                        <p className="text-center text-blue-950 font-medium truncate">
                            {manager.email ?? "—"}
                        </p>
                        <p className="text-center text-blue-950 font-medium">
                            {manager.phone ?? "—"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}