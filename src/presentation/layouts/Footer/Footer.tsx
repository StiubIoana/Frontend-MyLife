import { Grid, Button } from "@mui/material";
import { Container } from "@mui/system";
import { FC } from "react";
import './footer.scss';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routes';
/**
 * Here we have a simple footer container that will stay on the bottom of the page.
 */
export const Footer: FC<{}> = () => {
  const year = new Date().getFullYear();
  const { formatMessage } = useIntl();

  return <div className="website__footer">
    <Grid container item direction="row" xs={12}>
      <Grid container item direction="column" xs={12}>
        <Container>
          <div className="app__copyright">
            <div><Button color="inherit">
              <Link style={{ color: 'black' }} to={AppRoute.About}>
                      {formatMessage({ id: "globals.aboutTheGame" })}
              </Link>
            </Button></div>
            &copy; {year} • All rights reserved
          </div>
        </Container>
      </Grid>
    </Grid>
  </div>
};
