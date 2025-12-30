import { AuthProvider, LoadingProvider, DashboardProvider } from "./index";
const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <DashboardProvider>
        {children}
        </DashboardProvider>
      </LoadingProvider>
    </AuthProvider>
  );
};

export default AppProviders;
