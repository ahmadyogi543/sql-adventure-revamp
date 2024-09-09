import HomeRootPage from "../../pages/home/_root";
import HomeGameplayPage from "../../pages/home/gameplay";
import HomeLearnPage from "../../pages/home/learn";
import HomeLeadboardPage from "../../pages/home/leaderboard";
import HomeSettingsPage from "../../pages/home/settings";
import HomeAboutPage from "../../pages/home/about";
import LearnSlugPage from "../../pages/home/learn-slug";

export const routes = [
  {
    path: "/",
    element: <HomeRootPage />,
  },
  {
    path: "/gameplay",
    element: <HomeGameplayPage />,
  },
  {
    path: "/learn",
    element: <HomeLearnPage />,
  },
  {
    path: "/learn/:slug",
    element: <LearnSlugPage />,
  },
  {
    path: "/leaderboard",
    element: <HomeLeadboardPage />,
  },
  {
    path: "/settings",
    element: <HomeSettingsPage />,
  },
  {
    path: "/about",
    element: <HomeAboutPage />,
  },
];
