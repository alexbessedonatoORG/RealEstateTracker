import { logoutSupaService } from "../../../../services/SupaServices/LogoutSupaService/logoutSupaService"

export const Logout = () => {
    return (
        <button onClick={() => logoutSupaService()} className="bg-white/10 text-gray-800 px-4 py-2 shadow-lg rounded-2xl font-bold ring-1 ring-black/7">Logout</button>
    )
}
