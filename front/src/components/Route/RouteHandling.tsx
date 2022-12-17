import { Navigate } from "react-router";
import Storage from "apis/SessionStorage";

export const PrivateRoute = ({ children }: any) => {
  return !Storage.getTokenItem() ? <Navigate to="/*" /> : children;
};

export const PublicRoute = ({ children }: any) => {
  return Storage.getTokenItem() ? <Navigate to="/main" /> : children;
};
