export const LoadingSpinner = () => {
    return (
        <div
            className="absolute z-20  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-10 h-10 border-[5px] border-[#c4c4c4] border-t-transparent spin"
            aria-hidden="true"
        ></div>
    );
};
