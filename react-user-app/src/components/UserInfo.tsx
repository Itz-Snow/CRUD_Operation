export default function UserForm() {
    return (
        <>  
        {/* Profile Photo */}
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Profile Photo
        </label>
        <input 
            type="file"
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            accept="image/*" 
        />
        {/* First Name */}
        <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            First Name
        </label>
        <input 
            type="text" 
            className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your first name"
            required
        />
        {/* Last Name */}
        <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Last Name
        </label>
        <input
            type="text" 
            className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your last name"
            required
        />
        {/* Date of Birth */}
        <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            DOB
        </label>
        <input 
            type="date" 
            className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
        />
        {/* Ocupation */}
        <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Occupation
        </label>
        <input
            type="text" 
            className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your occupation"
            required    
        />
        {/* Gender */}
        <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Gender
        </label>
        <select
            className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
        >
            <option value="" disabled selected>Select your Gender</option>

            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
        </select>
        </>
    )

}