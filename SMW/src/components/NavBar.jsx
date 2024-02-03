import { Outlet, useNavigate } from "react-router-dom";
import LogoIcon from "../assets/logo.svg";
import UserIcon from "../assets/user-circle.svg";
import { NAVBAR_ITEMS, NAVPROFILE_ITEMS } from "../constant/constants";

// eslint-disable-next-line react/prop-types
const NavBar = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <div className=" grid  grid-rows-10 grid-cols-10  h-screen bg-gray-100  text-black">
        <div className="flex-col row-span-10 col-span-1  bg-white ">
          <div className="flex justify-center py-5">
            <img src={LogoIcon} alt="logo" />
          </div>
          <div className="mx-auto px-1">
            {NAVBAR_ITEMS.map((e) => (
              <>
                <div className="">
                  <button
                    onClick={() => navigate(e.path)}
                    className="tooltip btn btn-ghost w-full text-left "
                    data-tip={e.link}
                  >
                    <p>{e.link}</p>
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className=" flex-none row-span-1 col-span-9 navbar bg-white justify-between ">
          <div>
            <p className="text-xl btn btn-ghost ">Welcome! Black Adam</p>
          </div>
          <div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={UserIcon} alt="logo" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className=" z-[1] shadow menu menu-sm dropdown-content bg-white rounded-box "
              >
                {NAVPROFILE_ITEMS.map((e) => (
                  <>
                    <li>
                      <button
                        className="btn btn-ghost content-center "
                        onClick={() => navigate(e.path)}
                      >
                        <p>{e.title}</p>
                      </button>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row-span-9 col-span-9 p-5">
          {children && <Outlet />}
        </div>
      </div>
    </>
  );
};

export default NavBar;
