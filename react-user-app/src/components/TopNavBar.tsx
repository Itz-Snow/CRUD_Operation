import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../app/store";
import { useState } from "react";
import { login } from "../features/auth/authSlice";
import PasswordModal from "./PasswordModal";

// Top navigation bar component
export default function TopNavbar() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleUsersClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const handleLogin = (password: string) => {
    if (password === "1234") {
      dispatch(login());
      setShowModal(false);
      navigate("/users");
    } else {
      // You can extend this later to show toast or pass error handling back
      alert("Incorrect password");
    }
  };

  return (
    <>
      <nav className="bg-gray-800 text-white px-6 py-4 shadow-md sticky top-0 z-50 mb-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* App name */}
          <div className="text-xl font-bold tracking-wide">#CRUD</div>

          {/* Nav links */}
          <div className="flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "hover:text-gray-300 transition-colors duration-200"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/users"
              onClick={handleUsersClick}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "hover:text-gray-300 transition-colors duration-200"
              }
            >
              Users
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Password Modal */}
      {showModal && (
        <PasswordModal
          onClose={() => setShowModal(false)}
          onLogin={handleLogin}
        />
      )}
    </>
  );
}
