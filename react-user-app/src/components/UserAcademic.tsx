export default function UserAcademic() {
    return (
        <>
        <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            School
        </label>
        <input
            type="text"
            className="block w-full text-sm text-[#1f2937] bg-[#f9f9f9] rounded-[0.5rem] border-[1px] border-[#d1d5db] cursor-pointer focus:outline-none dark:text-[#9ca3af] dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af] mb-[0.5rem] h-[30px]"
            placeholder="eg. Harvard University"
            required
        />
        </>
    )
}