import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Fragment, memo } from "react";
import { Box } from "@mui/system";
import { Seo } from "@presentation/components/ui/Seo";
import { ContentCard } from "@presentation/components/ui/ContentCard";
import { ChallengeTable } from "@presentation/components/ui/Tables/ChallengeTable";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import challenges from "@presentation/assets/img/challenges.svg";
import { Typography } from "@mui/material";
import { useIntl } from "react-intl";

export const ChallengesPage = memo(() => {
  const { formatMessage } = useIntl();
  return <Fragment>
    <Seo title="MyLife The Game |  Challenges" />
    <WebsiteLayout>
      <Container fluid>
        <Typography variant="h4" style={{textAlign:"center", textTransform: "uppercase", marginTop:"60px", marginBottom:"-60px"}}>{formatMessage({ id: "globals.challenges" })}</Typography>
        <Row>
          <Col xs={12} md={8} lg={8}>
            <Box sx={{ padding: "0px 50px 00px 50px", justifyItems: "center" }}>
              <ContentCard>
                <ChallengeTable />
              </ContentCard>
            </Box>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <img src={challenges} style={{width:"400px", height:"350px", marginTop:"150px"}} alt="challenges SVG" className="rounded mx-auto d-block"/>
          </Col>
        </Row>
      </Container>
    </WebsiteLayout>
  </Fragment>
});
