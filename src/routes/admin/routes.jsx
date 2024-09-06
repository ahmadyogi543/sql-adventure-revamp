import AdminRootPage from "../../pages/admin/_root";
import AdminDashboardPage from "../../pages/admin/dashboard";
import AdminUsersPage from "../../pages/admin/users";
import AdminProgressPage from "../../pages/admin/progress";
import AdminStatsPage from "../../pages/admin/stats";

export const routes = [
  {
    path: "/admin/",
    element: <AdminRootPage />,
    children: [
      {
        element: <AdminDashboardPage />,
        index: true,
      },
      {
        path: "users",
        element: <AdminUsersPage />,
      },
      {
        path: "progress",
        element: <AdminProgressPage />,
      },
      {
        path: "stats",
        element: <AdminStatsPage />,
      },
    ],
  },
];
