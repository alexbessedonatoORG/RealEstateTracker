
import { Login } from "./components/Login/Login"
import { SignUp } from "./components/SignUp/SignUp"
import { Logout } from "./components/Logout/Logout";
import { useStore } from "@nanostores/react";
import { $auth } from "../../../stores/AuthStore";

export const Header = () => {
    const { user, loading } = useStore($auth);

    return (
        <header>
            <nav className="flex items-center justify-between p-4">

                <div className="flex items-center gap-2 flex-1">
                    <img src="GeminiLogo.png" alt="Logo" className="h-8" />
                    <span className="font-bold text-blue-950">Real Estate Tracker</span>
                </div>

                <div className="flex justify-center flex-none">
                    <span className="font-bold text-blue-950">Navigations</span>
                </div>

                <div className="flex items-center justify-end gap-4 flex-1">
                    {loading ? null : user ? (
                        <div className="flex items-center gap-4 font-bold">
                            <span className="text-blue-950 hidden sm:inline">
                                Welcome, {user.user_metadata?.display_name ?? user.email}
                            </span>
                            <Logout />
                        </div>
                    ) : (
                        <>
                            <Login />
                            <SignUp />
                        </>
                    )}
                </div>

            </nav>
        </header>
    );
};

