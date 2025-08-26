
import { useState } from "react";

interface PasswordModalProps {
  onClose: () => void;
  onLogin: (password: string) => void;
}

// Simple modal for password input
export default function PasswordModal({ onClose, onLogin }: PasswordModalProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (password.trim() === "") {
      setError("Password is required");
      return;
    }
    onLogin(password);
    setPassword("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">🔒 Login</h2>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded-lg mb-3"
          placeholder="******"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
