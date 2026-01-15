import { logoutSupaService } from "../../../../../SupabaseServices/LogoutService/logoutSupaService"
import { RiLogoutBoxRLine } from "react-icons/ri";

export const Logout = () => {
    return (
        <RiLogoutBoxRLine className="text-3xl" onClick={() => logoutSupaService()} />
    )
}
