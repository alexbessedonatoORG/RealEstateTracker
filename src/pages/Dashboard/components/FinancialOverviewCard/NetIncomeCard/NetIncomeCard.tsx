
interface NetIncomeCardProps {
    data: number;
}

export const NetIncomeCard = ({ data }: NetIncomeCardProps) => {
    return (
    <div className="p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-black text-lg uppercase">Net Income</p>
                    <p className="text-2xl font-semibold text-blue-950 mt-2">${data}</p>
                </div>
                <div className="text-xs text-gray-400">Monthly</div>
            </div>
        </div>
    )
}

