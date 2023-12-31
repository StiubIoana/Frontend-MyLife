import { useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routes';
import { useIntl } from 'react-intl';
import { useAppDispatch, useAppSelector } from '@application/store';
import { Grid } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { resetProfile } from '@application/state-slices';
import { useAppRouter } from '@infrastructure/hooks/useAppRouter';
import { NavbarLanguageSelector } from '@presentation/components/ui/NavbarLanguageSelector/NavbarLanguageSelector';
import { useOwnUserHasRole } from '@infrastructure/hooks/useOwnUser';
import { UserRoleEnum } from '@infrastructure/apis/client';
import Typography from '@mui/material/Typography';
import ReactLogo from '../../assets/img/logo.svg';
/**
 * This is the navigation menu that will stay at the top of the page.
 */
export const Navbar = () => {
  const { formatMessage } = useIntl();
  const { loggedIn } = useAppSelector(x => x.profileReducer);
  const isAdmin = useOwnUserHasRole(UserRoleEnum.Admin);
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { redirectToHome } = useAppRouter();
  const logout = useCallback(() => {
    dispatch(resetProfile());
    redirectToHome();
  }, [queryClient, dispatch, redirectToHome]);

  return <Box sx={{ flexGrow: 1, backgroundColor: "#3A1078"}}>
    <AppBar sx={{backgroundColor: "#3A1078"}}>
      <Toolbar>
        <Grid
          container
          item
          direction="row"
          xs={12}
          alignItems="center"
          wrap="nowrap"
          columnSpacing={2}
        >
          <Grid container item direction="column" xs={1}>
             <Link to={AppRoute.Index}><img src={ReactLogo} alt="React Logo" style={{width: "50px", height:"50px"}}/></Link>
          </Grid>
          <Grid container item direction="column" xs={8}>
            {<Grid // If the user is logged in and it is an admin they can have new menu items shown.
              container
              item
              direction="row"
              xs={12}
              alignItems="center"
              wrap="nowrap"
              columnSpacing={15}
            >
              <Grid container item direction="column" xs={1}>
                <Button color="inherit">
                  <Link style={{ color: 'white' }} to={AppRoute.Challenges}>
                    {formatMessage({ id: "globals.challenges" })}
                  </Link>
                </Button>
              </Grid>
              <Grid container item direction="column" xs={1}>
                <Button color="inherit">
                  <Link style={{ color: 'white' }} to={AppRoute.ChallengeAttributes}>
                    {formatMessage({ id: "globals.challengeAttributes" })}
                  </Link>
                </Button>
              </Grid>
              {isAdmin &&
              <Grid container item direction="column" xs={1}>
                <Button color="inherit">
                  <Link style={{ color: 'white' }} to={AppRoute.Users}>
                    {formatMessage({ id: "globals.users" })}
                  </Link>
                </Button>
              </Grid>}
            </Grid>}
          </Grid>
          <Grid container item direction="column" xs={2}>
            {loggedIn && !isAdmin && <Button color="inherit" > {/* Otherwise show the logout button. */}
            <Link style={{ color: 'white' }} to={AppRoute.Profile}>
                {formatMessage({ id: "globals.profile" })}
              </Link>
            </Button>}
          </Grid>
          <Grid container item direction="column" xs={1}>
            <NavbarLanguageSelector />
          </Grid>
          <Grid container item direction="column" xs={2}>
            {!loggedIn && <Button color="inherit">  {/* If the user is not logged in show a button that redirects to the login page. */}
              <Link style={{ color: 'white' }} to={AppRoute.Login}>
                {formatMessage({ id: "globals.login" })}
              </Link>
            </Button>}
            {loggedIn && <Button onClick={logout} color="inherit" > {/* Otherwise show the logout button. */}
              {formatMessage({ id: "globals.logout" })}
            </Button>}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </Box>
}