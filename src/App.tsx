import { UserRoleEnum } from "@infrastructure/apis/client";
import { useOwnUserHasRole } from "@infrastructure/hooks/useOwnUser";
import { AppIntlProvider } from "@presentation/components/ui/AppIntlProvider";
import { ToastNotifier } from "@presentation/components/ui/ToastNotifier";
import { HomePage } from "@presentation/pages/HomePage";
import { LoginPage } from "@presentation/pages/LoginPage";
import { RegisterPage } from "@presentation/pages/RegisterPage";
import { UserFilesPage } from "@presentation/pages/UserFilesPage";
import { UsersPage } from "@presentation/pages/UsersPage";
import { ProfilePage } from "@presentation/pages/ProfilePage";
import { ChallengesPage } from "@presentation/pages/ChallengesPage";
import { TopPage } from "@presentation/pages/TopPage";
import { AboutPage } from "@presentation/pages/AboutPage";
import { ChallengeAttributesPage } from "@presentation/pages/ChallengeAttributesPage";
import { Route, Routes } from "react-router-dom";
import { AppRoute } from "routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppSelector } from "@application/store"

export function App() {
  const isAdmin = useOwnUserHasRole(UserRoleEnum.Admin);
  const { loggedIn, exp } = useAppSelector(x => x.profileReducer);

  return <AppIntlProvider> {/* AppIntlProvider provides the functions to search the text after the provides string ids. */}
      <ToastNotifier />
      {/* This adds the routes and route mappings on the various components. */}
      <Routes>
        <Route path={AppRoute.Index} element={<HomePage />} /> {/* Add a new route with a element as the page. */}
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Register} element={<RegisterPage />} />
        <Route path={AppRoute.Challenges} element={<ChallengesPage />} />
        <Route path={AppRoute.ChallengeAttributes} element={<ChallengeAttributesPage />} />
        {loggedIn && !isAdmin && <Route path={AppRoute.Profile} element={<ProfilePage />} />}
        {loggedIn && !isAdmin &&  <Route path={AppRoute.Top} element={<TopPage />} /> }
        <Route path={AppRoute.About} element={<AboutPage />} />
        {isAdmin && <Route path={AppRoute.Users} element={<UsersPage />} />} {/* If the user doesn't have the right role this route shouldn't be used. */}
        {isAdmin && <Route path={AppRoute.UserFiles} element={<UserFilesPage />} />}
      </Routes>
    </AppIntlProvider>
}
