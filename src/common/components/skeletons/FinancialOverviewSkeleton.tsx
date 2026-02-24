export const FinancialOverviewSkeleton = () => {
  const shimmer =
    "animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]";

  const cards = Array.from({ length: 4 });

  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 h-full">
      <div className={`h-8 w-64 rounded-lg ${shimmer}`} />

      <div className="mt-6 grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((_, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-3">
                <div className={`h-4 w-28 rounded-md ${shimmer}`} />
                <div className={`h-7 w-24 rounded-md ${shimmer}`} />
              </div>
              <div className={`h-3 w-14 rounded-md ${shimmer}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

