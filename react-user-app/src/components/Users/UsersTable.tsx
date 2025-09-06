import { Pencil, Trash2, Eye } from "lucide-react";
import  type {User} from "../../types/UserTypes";



interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (userId: number) => void
  onView: (user: User) => void
}

export default function UsersTable({ users, onEdit, onDelete, onView }: Props)
{
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left border-b">Full Name</th>
            <th className="px-4 py-2 text-left border-b">Email</th>
            <th className="px-4 py-2 text-left border-b">Occupation</th>
            <th className="px-4 py-2 text-left border-b">Gender</th>
            <th className="px-4 py-2 text-center border-b">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-500">
                No users found
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                {/* Full Name */}
                <td className="px-4 py-2 border-b">
                  {user.firstName} {user.lastName}
                </td>

                {/* Email */}
                <td className="px-4 py-2 border-b">{user.contact?.email}</td>

                {/* Occupation */}
                <td className="px-4 py-2 border-b">{user.occupation}</td>

                {/* Gender */}
                <td className="px-4 py-2 border-b">{user.gender}</td>

                {/* Actions */}
                <td className="px-4 py-2 border-b text-center space-x-2">
                  {/* ✏️ Edit */}
                  <button
                    onClick={() => onEdit(user)}
                    className="p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                  >
                    <Pencil size={16} />
                  </button>

                  {/* ❌ Delete */}
                  <button
                    onClick={() => onDelete(user.id)}
                    className="p-2 rounded bg-red-500 text-white hover:bg-red-600"
                  >
                    <Trash2 size={16} />
                  </button>

                  {/* 👁 View */}
                  <button
                    onClick={() => onView(user)}
                    className="p-2 rounded bg-gray-500 text-white hover:bg-gray-600"
                  >
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
