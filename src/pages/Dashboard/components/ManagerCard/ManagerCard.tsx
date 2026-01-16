import { ManagerInfoList } from "./ManagerInfoList/ManagerInfoList";

export const ManagerCard = () => {

    return (
        <div className="bg-white w-full shadow-lg rounded-3xl p-8">
            <p className="text-3xl text-gray-800 font-bold">Property Managers</p>
            <ManagerInfoList />
        </div>
    );
};