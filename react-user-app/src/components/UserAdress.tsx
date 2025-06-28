export default function UserAdress() {
    return (
        <>
            {/* Street Address */}
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Street Address
            </label>
            <input
                type="text"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your street address"
                required
            />
            {/* City */}
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                City
            </label>
            <input
                type="text"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your city"
                required
            />
            {/* State */}
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                State
            </label>
            <input
                type="text"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your state"
                required
            />

            {/* Country */}
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Country
            </label>
            <input
                type="text"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your country"
                required
            />

            {/* Zip Code */}
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Zip Code
            </label>
            <input
                type="text"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:
                focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your zip code"
                required
            />
        </>
    )
}