import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../services/AuthService";

const ProtectedRoute = () => {
  // 1. Check if user has a token
  const isAuth = isLoggedIn();

  // 2. if yes, render the child routes (Outlet)
  // 3. if no, kick them back to Login
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
