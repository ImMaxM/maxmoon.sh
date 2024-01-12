import { FaCodeBranch, FaStar } from "react-icons/fa";

const CardLoading = () => {
  return (
    <div className="border border-stroke rounded-md p-4 max-w-sm w-full mx-auto bg-background">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded w-[50%]"></div>
          <div className="space-y-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-2" />
            <div className="h-2 bg-slate-700 rounded w-[75%]" />
            <div className="flex items-center mt-2">
              <FaStar className="mr-1" />
              <div className="h-2 bg-slate-700 rounded w-[10%]" />
              <FaCodeBranch className="ml-2 mr-1" />
              <div className="h-2 bg-slate-700 rounded w-[10%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
