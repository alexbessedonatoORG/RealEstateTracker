import { useState } from "react";
import { LuHouse } from "react-icons/lu";
import { SlPeople } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";

type tabNames = "Properties" | "Tenants" | "Financials" | "Settings";

export const SideBar = () => {
    const [selected, setSelected] = useState("Properties");

    const getItemClasses = (tabName: tabNames) => {
        const baseClasses = "flex items-center gap-2 p-4 w-full cursor-pointer transition-colors";
        const activeClasses = "bg-gray-300 border-l-4 border-blue-950";
        const inactiveClasses = "hover:bg-gray-300";

        return `${baseClasses} ${selected === tabName ? activeClasses : inactiveClasses}`;
    };

    return (
        <div className="flex flex-col bg-gray-200 text-xl text-blue-950 min-h-screen w-64">

            <div
                onClick={() => setSelected("Properties")}
                className={getItemClasses("Properties")}
            >
                <LuHouse />
                <span>Properties</span>
            </div>

            <div
                onClick={() => setSelected("Tenants")}
                className={getItemClasses("Tenants")}
            >
                <SlPeople />
                <span>Tenants</span>
            </div>

            <div
                onClick={() => setSelected("Financials")}
                className={getItemClasses("Financials")}
            >
                <BsGraphUpArrow />
                <span>Financials</span>
            </div>

            <div
                onClick={() => setSelected("Settings")}
                className={getItemClasses("Settings")}
            >
                <IoSettingsOutline />
                <span>Settings</span>
            </div>
        </div>
    );
};