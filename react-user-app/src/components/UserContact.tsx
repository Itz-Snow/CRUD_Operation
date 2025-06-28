export default function UserContact() {
    return (
        <>
            {/* Email */}
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
            </label>
            <input
                type="email"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"
                required
            />
            {/* Phone Number */}
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone Number
            </label>
            <input
                type="tel"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your phone number"
                required
            />
            {/* Fax optional */}
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Fax
            </label>
            <input
                type="text"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Fax number (optional)"
            /> 
            {/* Linkedln optional  */}       
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                LinkedIn (optional)
            </label>
            <input
                type="url"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="LinkedIn profile URL (optional)"
            />    
        </>
    )
}   