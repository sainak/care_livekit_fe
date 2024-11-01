import { AppRoutes } from "@core/Routers/AppRouter";
import { lazy } from "react";

const DoctorLiveConnect = lazy(() => import("./components/DoctorLiveConnect"));

const routes: AppRoutes = {
  "/live_connect/:username": ({ username }) => (
    <DoctorLiveConnect username={username} />
  ),
};

export default routes;
