import type { Tenant } from "@types";

const mockTenants: Tenant[] = [
    {
        id: 't1',
        property: 'Maple Apartments',
        name: 'Lena Ortiz',
        email: 'lena.ortiz@example.com',
        phone: '(555) 111-2222',
        endOfContract: '2026-08-31'
    },
    {
        id: 't2',
        property: 'Riverwalk Lofts',
        name: 'Marcus Lee',
        email: 'marcus.lee@example.com',
        phone: '(555) 333-4444',
        endOfContract: '2027-01-15'
    }
]

export const TenantsInfoList = () => {
    const rowStyle = "grid grid-cols-[3fr_2fr_2fr_2fr_1fr] gap-4 items-center px-8";

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
                {mockTenants.map(t => (
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
