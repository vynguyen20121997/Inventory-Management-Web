import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { NAVBAR_ITEMS, NAVPROFILE_ITEMS } from "../../constant/constants";
import LogoIcon from "/src/assets/logo.svg";
import UserIcon from "/src/assets/user-circle.svg";
import { useSelector } from "react-redux";
import { PATHS } from "../../constant/urls";

// eslint-disable-next-line react/prop-types
const NavBar = ({ children }) => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const parentRoute = location.pathname.split("/")[1];
  const childRoute = location.pathname.split("/")[2];
  const shelf = useSelector((state) => state.shelf.fetchShelfResources);
  return (
    <>
      <div className=" grid  grid-rows-10 grid-cols-10  h-screen bg-gray-100  text-black">
        <div className="flex-col row-span-10 col-span-1  bg-white ">
          <div className=" h-24 py-4  ">
            <div className="flex justify-center">
              <img src={LogoIcon} alt="logo" />
            </div>
            <div className="h-[1px] w-full bg-[#F2F2F2] mt-[9.6px]" />
          </div>
          <ul key="0123aefa1786417osjef" className=" menu mx-auto px-2  ">
            {NAVBAR_ITEMS.map(({ path, title }) => (
              <>
                <li
                  key={path}
                  onClick={() => navigate(path)}
                  className={` w-full ${parentRoute === `${path}` && params.id === undefined && childRoute === undefined ? "bg-[#B5DCFD]" : "bg-transparent"}  rounded-md`}
                >
                  {path === parentRoute && path === "export" ? (
                    <p
                      className="tooltip font-normal text-2xl text-left align-middle"
                      data-tip={title}
                    >
                      {title}
                      <div className="badge w-[30px] h-[30px] bg-[#008AFF] border-none text-white rounded-full">
                        +99
                      </div>
                    </p>
                  ) : (
                    <p
                      className="tooltip font-normal text-2xl text-left align-middle"
                      data-tip={title}
                    >
                      {title}
                    </p>
                  )}
                  {path === parentRoute &&
                  parentRoute !== PATHS.inventory &&
                  params.id !== undefined ? (
                    <ul
                      className="bg-[#B5DCFD] rounded-md ml-0 pl-6 "
                      key="010sdfsewe234"
                    >
                      <li key="09wrf3w45sfg0">
                        <p className="font-normal text-2xl ">
                          {path === PATHS.export
                            ? `${params.id}`
                            : ` ${shelf.title}`}
                        </p>
                      </li>
                    </ul>
                  ) : path === parentRoute &&
                    parentRoute === PATHS.inventory ? (
                    <ul
                      className="bg-white rounded-md ml-0 pl-0 "
                      key="0aefasefw420"
                      // onClick={() => navigate(PATHS.inventoryReport)}
                    >
                      {childRoute ? (
                        <li key="32q33qrqdff">
                          <p className="font-normal text-2xl text-nowrap bg-[#B5DCFD]	text-[#696969] ">
                            Inventory Report
                          </p>
                        </li>
                      ) : (
                        <li key="32q33rqdwwfweff">
                          <p className="font-normal text-2xl text-nowrap	text-[#696969] ">
                            Inventory Report
                          </p>
                        </li>
                      )}
                    </ul>
                  ) : null}
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="  row-span-1 col-span-9  bg-white">
          <div className=" justify-between navbar px-5">
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
                  key="profasefsefwieMenu"
                  tabIndex={0}
                  className=" z-[1] shadow menu menu-sm dropdown-content bg-white rounded-box "
                >
                  {NAVPROFILE_ITEMS.map(({ path, title }) => (
                    <>
                      <li key={title}>
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
          <div className="h-[1px] w-full bg-[#F2F2F2] mt-2" />
        </div>
        <div className="row-span-9 col-span-9 grid grid-rows-12">
          {children && <Outlet />}
        </div>
      </div>
    </>
  );
};

export default NavBar;
