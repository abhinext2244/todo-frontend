import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../contextApi/useAuth";
import { useLoading } from "../../contextApi/useLoading";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const res = await login(email, password);

      if (res?.data?.success) {
        toast.success(res.data.message || "Login successful");
        navigate("/categories");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      px-4
      bg-[rgb(var(--bg-app))]
      text-[rgb(var(--text-primary))]
    ">
      <div className="
        w-full
        max-w-md
        p-6
        rounded-xl
        border
        border-[rgb(var(--border-default))]
        bg-[rgb(var(--bg-card))]
        shadow-sm
      ">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              px-3
              py-2
              rounded-md
              bg-[rgb(var(--bg-secondary))]
              border
              border-[rgb(var(--border-default))]
              text-[rgb(var(--text-primary))]
              placeholder:text-[rgb(var(--text-muted))]
              focus:outline-none
              focus:ring-2
              focus:ring-[rgb(var(--primary))]
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full
              px-3
              py-2
              rounded-md
              bg-[rgb(var(--bg-secondary))]
              border
              border-[rgb(var(--border-default))]
              text-[rgb(var(--text-primary))]
              placeholder:text-[rgb(var(--text-muted))]
              focus:outline-none
              focus:ring-2
              focus:ring-[rgb(var(--primary))]
            "
          />

          <button
            type="submit"
            className="
              w-full
              py-2
              rounded-md
              font-medium
              text-white
              bg-[rgb(var(--primary))]
              hover:bg-[rgb(var(--primary-hover))]
              transition
            "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
