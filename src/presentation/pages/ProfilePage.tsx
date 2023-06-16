import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Fragment, memo } from "react";
import { Box } from "@mui/system";
import { Seo } from "@presentation/components/ui/Seo";
import { ContentCard } from "@presentation/components/ui/ContentCard";
import { ScoreTable } from "@presentation/components/ui/Tables/ScoreTable";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from "@presentation/assets/img/profile.svg";
import { Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { Link } from 'react-router-dom';
import { AppRoute } from 'routes';

export const ProfilePage = memo(() => {
  const { formatMessage } = useIntl();
  return <Fragment>
    <Seo title="MyLife The Game |  Challenges" />
    <WebsiteLayout>
      <Container fluid>
        <Typography variant="h4" style={{textAlign:"center", textTransform: "uppercase", marginTop:"60px", marginBottom:"-60px"}}>{formatMessage({ id: "globals.profile" })}</Typography>
        <Row>
          <Col xs={12} md={8} lg={8}>
            <Box sx={{ padding: "0px 50px 00px 50px", justifyItems: "center" }}>
              <ContentCard>
                <ScoreTable />
              </ContentCard>
            </Box>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <img src={profile} style={{width:"400px", height:"350px", marginTop:"60px"}} alt="Profile SVG" className="rounded mx-auto d-block"/>
            
            <Box sx={{ marginTop: '100px', border: '1px solid grey', textAlign:'center'}}>
                          <p style={{marginTop: '10px'}}>{formatMessage({ id: "texts.seeTop" })} 
                              <Link  to={AppRoute.Top}>
                              {formatMessage({ id: "texts.clickHere" })}
                              </Link>
                          </p>
            </Box>
          </Col>
        </Row>
      </Container>
    </WebsiteLayout>
  </Fragment>
});