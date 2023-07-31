import { ReactNode } from "react";
// import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isLoggin = useAuth()

  const { pathname } = useLocation();

  if (isLoggin) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
