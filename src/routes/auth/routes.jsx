import AuthLoginPage from "../../pages/auth/login";
import AuthRegisterPage from "../../pages/auth/register";

export const routes = [
  {
    path: "/login",
    element: <AuthLoginPage />,
  },

  {
    path: "/register",
    element: <AuthRegisterPage />,
  },
];
