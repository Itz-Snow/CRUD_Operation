export default function UserAcademic() {
    return (
        <>
        <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Academic Qualification
        </label>
        <input
            type="text"
            className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your academic qualification"
            required
        />
        </>
    )
}