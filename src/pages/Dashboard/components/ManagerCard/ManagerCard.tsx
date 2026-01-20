import { AddManagerButton } from "./components/AddManagerButton/AddManagerButton";
import { ManagerInfoList } from "./ManagerInfoList/ManagerInfoList";

export const ManagerCard = () => {

    return (
        <div className="bg-white w-full shadow-lg rounded-3xl p-8">
            <div className="flex items-center justify-between">
                <p className="text-3xl text-gray-800 font-bold">Property Managers</p>
                <AddManagerButton />
            </div>
            <ManagerInfoList />
        </div>
    );
};