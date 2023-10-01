import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto my-12 px-2">
      <nav className="flex justify-between">
        <img src="/Resources/Logo.png" alt="" />
        <ul className="flex gap-4 text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/donations"
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
            }
            >
              Donation
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
            }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
