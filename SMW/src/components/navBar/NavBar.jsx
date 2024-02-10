import { Outlet, useNavigate, useParams } from "react-router-dom";
import { NAVBAR_ITEMS, NAVPROFILE_ITEMS } from "../../constant/constants";
import LogoIcon from "/src/assets/logo.svg";
import UserIcon from "/src/assets/user-circle.svg";

// eslint-disable-next-line react/prop-types
const NavBar = ({ children }) => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <>
      <div className=" grid  grid-rows-10 grid-cols-10  h-screen bg-gray-100  text-black">
        <div className="flex-col row-span-10 col-span-1  bg-white ">
          <div className="flex justify-center py-5">
            <img src={LogoIcon} alt="logo" />
          </div>
          <ul className=" menu mx-auto px-2 ">
            {NAVBAR_ITEMS.map(({ path, title }) => (
              <>
                <li
                  onClick={() => navigate(path)}
                  className="tooltip w-full"
                  data-tip={title}
                >
                  <p className="font-normal text-2xl text-left align-middle">
                    {title}
                  </p>
                  {title === "Shelf" && params.id !== undefined && (
                    <ul className="bg-[#B5DCFD] rounded-md ml-0 pl-6 ">
                      <li>
                        <p className="font-normal text-2xl ">
                          Shelf {params.id}
                        </p>
                      </li>
                    </ul>
                  )}
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className=" flex-none row-span-1 col-span-9 navbar bg-white justify-between px-5">
          <div>
            <p className="text-3xl font-normal    ">Welcome! Black Adam</p>
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
                {NAVPROFILE_ITEMS.map(({ path, title }) => (
                  <>
                    <li>
                      <button
                        className="btn btn-ghost content-center "
                        onClick={() => navigate(path)}
                      >
                        <p className="font-light">{title}</p>
                      </button>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row-span-9 col-span-9 grid grid-rows-12">
          {children && <Outlet />}
        </div>
      </div>
    </>
  );
};

export default NavBar;
