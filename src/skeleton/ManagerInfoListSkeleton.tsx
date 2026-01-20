export const ManagerInfoListSkeleton = () => {
  const rowStyle = "grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 items-center px-8";

  const shimmer =
    "animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]";

  return (
    <div className="border border-gray-200 rounded-3xl w-full pt-4 bg-gray-100 shadow-sm overflow-hidden mt-8">
      <div className={`${rowStyle} text-black text-md uppercase border-b border-gray-200 pb-4`}>
        <p>Name</p>
        <p className="text-center">Company</p>
        <p className="text-center">Email</p>
        <p className="text-center">Phone</p>
      </div>
      <div className="divide-y divide-gray-200 bg-white">
        <div className={`${rowStyle} py-5`}>
          <div className="flex flex-col min-w-0 gap-2">
            <div className={`h-4 w-40 rounded-md ${shimmer}`} />
            <div className={`h-3 w-28 rounded-md ${shimmer}`} />
          </div>
          <div className={`h-4 w-32 rounded-md ${shimmer} mx-auto`} />
          <div className={`h-4 w-40 rounded-md ${shimmer} mx-auto`} />
          <div className={`h-4 w-28 rounded-md ${shimmer} mx-auto`} />
        </div>
      </div>
    </div>
  );
};
