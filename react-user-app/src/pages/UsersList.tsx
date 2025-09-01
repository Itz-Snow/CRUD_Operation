import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchUsers } from "../features/user/userSlice";
import UsersTable from "../components/Users/UsersTable";

export default function UsersList() {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.user);

  // Fetch users when page loads
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Users Management</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading users...</p>
      ) : (
        <UsersTable users={users} />
      )}
    </div>
  );
}
