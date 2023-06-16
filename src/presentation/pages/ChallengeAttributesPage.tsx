import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Fragment, memo } from "react";
import { Box } from "@mui/system";
import { Seo } from "@presentation/components/ui/Seo";
import { ContentCard } from "@presentation/components/ui/ContentCard";
import { ChallengeAttributeTable } from "@presentation/components/ui/Tables/ChallengeAttributeTable";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import attribute from "@presentation/assets/img/attribute.svg";
import { Typography } from "@mui/material";
import { useIntl } from "react-intl";

export const ChallengeAttributesPage = memo(() => {
  const { formatMessage } = useIntl();
  return <Fragment>
    <Seo title="MyLife The Game |  Attributes" />
    <WebsiteLayout>
      <Container fluid>
        <Typography variant="h4" style={{textAlign:"center", textTransform: "uppercase", marginTop:"60px", marginBottom:"-60px"}}>{formatMessage({ id: "globals.challengeAttributes" })}</Typography>
        <Row>
          <Col xs={12} md={8} lg={8}>
            <Box sx={{ padding: "0px 50px 00px 50px", justifyItems: "center" }}>
              <ContentCard>
                <ChallengeAttributeTable />
              </ContentCard>
            </Box>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <img src={attribute} style={{width:"400px", height:"350px", marginTop:"150px"}} alt="challenges SVG" className="rounded mx-auto d-block"/>
          </Col>
        </Row>
      </Container>
    </WebsiteLayout>
  </Fragment>
});
