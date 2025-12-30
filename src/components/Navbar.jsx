import {
  AUTH_NAVBAR,
  USER_NAVBAR,
  ADMIN_NAVBAR,
} from "../data/navbar-data";
import { useAuth } from "../contextApi/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  let menu = AUTH_NAVBAR;

  if (user?.role === "USER") menu = USER_NAVBAR;
  if (user?.role === "ADMIN") menu = ADMIN_NAVBAR;

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav
        className="
          fixed top-0 left-0 w-full z-50
          bg-[rgb(var(--bg-card))]
          border-b border-[rgb(var(--border-default))]
        "
      >
        <div className="px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-[rgb(var(--text-primary))]">
            TodoApp
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            {menu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="text-sm font-medium text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))]"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {user && (
              <li>
                <button
                  onClick={logout}
                  className="px-4 py-1.5 rounded-lg bg-[rgb(var(--danger))] text-white text-sm"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[rgb(var(--text-primary))]"
            aria-label="Toggle menu"
          >
            {!open ? (
              /* Hamburger */
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              /* Cross */
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ===== MOBILE OVERLAY MENU ===== */}
      {open && (
        <div
          className="
            fixed inset-0 z-40
            bg-black/40
            md:hidden
          "
          onClick={() => setOpen(false)}
        >
          <div
            className="
              absolute top-16 left-0 w-full
              bg-[rgb(var(--bg-card))]
              border-b border-[rgb(var(--border-default))]
              px-6 py-4
              flex flex-col gap-3
            "
            onClick={(e) => e.stopPropagation()}
          >
            {menu.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary))]"
              >
                {item.label}
              </Link>
            ))}

            {user && (
              <button
                onClick={logout}
                className="mt-2 px-4 py-2 rounded-lg bg-[rgb(var(--danger))] text-white text-sm"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
