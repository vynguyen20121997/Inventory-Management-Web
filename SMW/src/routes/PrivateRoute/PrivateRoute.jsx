import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";

const PrivateRoute = () => {
  // const isAuthenticated = useSelector((state) => state);
  // const user = useSelector((state) => state);
  // const location = useLocation();
  // const matches = useMatches();

  // const match = [...matches.reverse()].find(
  //   (match) => match.pathname === location.pathname
  // );
  // const roles = match?.handle?.roles.join(",");
  // const userRole = user && user?.role;

  // if (isAuthenticated) {
  //   if (roles && roles === userRole) {
  return (
    <Suspense fallback={null}>
      <NavBar>
        <Outlet />
      </NavBar>
    </Suspense>
  );
  // }
  // }
  // return null;
};

export default PrivateRoute;
