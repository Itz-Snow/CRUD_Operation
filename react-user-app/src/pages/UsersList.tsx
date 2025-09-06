import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchUsers, setCurrentUser, updateFormData, deleteUser } from "../features/user/userSlice";
import UsersTable from "../components/Users/UsersTable";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../components/Users/DeleteModal";
import type { User } from "../types/UserTypes";
import { transformBackendToFormData } from "../utils/transform";
import toast from "react-hot-toast"; 


export default function UsersList() {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.user);

  // Modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false); 
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null); 

  // Fetch users when page loads
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Handles Edit action
  function handleEdit(user: any) {
    console.log("User Id", user.id )
    user = transformBackendToFormData(user);
    dispatch(setCurrentUser(user));
    dispatch(updateFormData(user));
    navigate("/"); 
  }

  // Trigger modal before deleting
  function confirmDelete(userId: number) {
    setSelectedUserId(userId);
    setShowDeleteModal(true);
  }

  // Final delete action after confirmation
  async function handleDeleteConfirmed() {
    if (!selectedUserId) return;
    try {
      await dispatch(deleteUser(String(selectedUserId))).unwrap();
      toast.success("User deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete user. Try again.");
      console.error("Delete failed:", error);
    } finally {
      setShowDeleteModal(false);
      setSelectedUserId(null);
    }
  }

  // Handle View action
  function handleView(user: User) {
    console.log("Viewing user:", user);
    dispatch(setCurrentUser(user));
    navigate(`/view`);
  }
  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Users Management</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading users...</p>
      ) : (
        <UsersTable users={users} onEdit= {handleEdit} onDelete={confirmDelete} 
        onView={handleView} />
      )}

       {/*Renders delete Confirmation Modal*/}
      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteConfirmed}
        userId={selectedUserId || ""}
      />
    </div>
  );
}
