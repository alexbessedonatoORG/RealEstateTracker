import { useGetDate } from "../../../../common/hooks/useGetDate/useGetDate"
import { PropertyInfoList } from "../PropertyInfoList/PropertyInfoList"
import { $auth } from "../../../../stores/AuthStore";
import { useStore } from "@nanostores/react";
import { AddPropertyButton } from "../../../../common/components/Header/components/AddPropertyButton/AddPropertyButton";

export const PropertiesCard = () => {
    const { user } = useStore($auth);
    const date = useGetDate();

    return (
        <div className="flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-7xl   shadow-lg rounded-3xl p-8">
                {user ? (
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
                ) : (
                    <div className="flex justify-center items-center py-10 text-gray-500">
                        Log in to see Data
                    </div>
                )}
            </div>
        </div>
    );
};