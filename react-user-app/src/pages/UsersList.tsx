import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { Navigate } from "react-router-dom";

export default function UsersList() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-lg"> This is the User Management page </h1>
    </div>
  );
}
