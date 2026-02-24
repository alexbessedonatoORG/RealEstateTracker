import { useGetDate } from "../../../../common/hooks/useGetDate/useGetDate"
import { PropertyInfoList } from "./PropertyInfoList/PropertyInfoList"
import { AddPropertyButton } from "../../../../common/components/Header/components/AddPropertyButton/AddPropertyButton";

export const PropertiesCard = () => {
    const date = useGetDate();

    return (
        <div className="flex items-center justify-center p-6">
            <div className="bg-white w-full shadow-lg rounded-3xl p-8">
                <>
                    <div className="flex items-center justify-between pb-4">
                        <div>
                            <p className="text-3xl text-gray-800 font-bold">Property Portfolio Summary</p>
                            <p className="text-gray-500">updated {date}</p>
                        </div>
                        <AddPropertyButton />
                    </div>
                    <PropertyInfoList />
                </>
            </div>
        </div>
    );
};