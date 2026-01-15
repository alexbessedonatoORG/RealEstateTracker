import { logoutSupaService } from "../../../../../SupabaseServices/LogoutService/logoutSupaService"
import { RiLogoutBoxRLine } from "react-icons/ri";

export const Logout = () => {
    return (
        <div className="flex flex-col items-center text-blue-950">
            <RiLogoutBoxRLine className="text-3xl" onClick={() => logoutSupaService()} />
            <p>Logout</p>
        </div>
    )
}
