import { useAuthStore } from "@/store/useAuthStore";
import { AuthRequirement } from "./auth-requirement";

export const ProtectedRoute = ({children}) => {
  const { isAuthenticated } = useAuthStore();
  return (
    <>{isAuthenticated ?  children  : <AuthRequirement/>}</>
  );
};
