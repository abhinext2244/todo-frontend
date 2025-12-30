import { createContext, useEffect, useState } from "react";
import { registerUser, loginUser, getMe, logoutUser } from "../services/authApi";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Refresh ke baad auto-login
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await getMe();

        if (res?.data?.success) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log(error)
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    checkAuth();
  }, []);

  //  Register
  const register = async (name, email, password) => {
    const res = await registerUser(name, email, password);

    if (res?.data?.success) {
      setUser(res.data.user);
    }

    return res;
  };

  // Login
  const login = async (email, password) => {
    const res = await loginUser(email, password);
      const resme  =    await getMe();
    if (resme?.data?.success) {
      setUser(resme.data.user); 
    }else{
      setUser(null);
    }

    return res;
  };

  // Logout
  const logout = async () => {
    await logoutUser();
    navigate("/");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        authLoading,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
