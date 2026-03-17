import { useAuthStore } from "@/store/useAuthStore";
import { AuthRequirement } from "./authRequirement";

export const ProtectedRoute = ({children}) => {
  const { isAuthenticated } = useAuthStore();
  return (
    <>{isAuthenticated ?  children  : <AuthRequirement/>}</>
  );
};
