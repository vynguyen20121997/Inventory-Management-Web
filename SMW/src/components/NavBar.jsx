import { Link, Outlet } from "react-router-dom";
import { NAVBAR_ITEMS, NAVPROFILE_ITEMS } from "../constant/constants";

// eslint-disable-next-line react/prop-types
const NavBar = ({ children }) => {
  return (
    <>
      {" "}
      <div className=" grid  grid-rows-10 grid-cols-10  h-screen bg-gray-100">
        <div className="flex-none row-span-10 col-span-1  bg-white ">
          <div className="">Icon</div>
          <div className=" ml-2 mt-16">
            {NAVBAR_ITEMS.map((e) => (
              <>
                <div className="mt-5">
                  <Link to={e.path}>
                    <div className="tooltip" data-tip={e.link}>
                      {e.link}
                    </div>
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className=" flex-none row-span-1 col-span-9 navbar bg-white justify-between ">
          <div>
            <p className="btn btn-ghost text-md">Welcome! Black Adam</p>
          </div>
          <div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-fit"
              >
                {NAVPROFILE_ITEMS.map((e) => (
                  <>
                    <li>
                      <a>{e.title}</a>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row-span-9 col-span-9">{children && <Outlet />}</div>
      </div>
    </>
  );
};

export default NavBar;
