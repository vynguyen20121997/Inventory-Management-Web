import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const PublicRoute = () => {
  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoute;
