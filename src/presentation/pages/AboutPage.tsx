import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Typography } from "@mui/material";
import { Fragment, memo } from "react";
import { useIntl } from "react-intl";
import { Box } from "@mui/system";
import { Seo } from "@presentation/components/ui/Seo";
import { ContentCard } from "@presentation/components/ui/ContentCard";
import about from "@presentation/assets/img/aboutTheGame.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "@presentation/assets/styles/homepage.scss"

export const AboutPage = memo(() => {
  const { formatMessage } = useIntl();
  const styles = {
    img: {
      width: "500px",
      height: "600px",
    }
  };

  return <Fragment>
      <Seo title="MyLife The Game | About" />
      <WebsiteLayout>
        <Container fluid>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Box>
                <ContentCard title={formatMessage({ id: "texts.aboutTheGame" })}>
                  <Typography>{formatMessage({ id: "texts.aboutTheGameDescription" })}</Typography>
                </ContentCard>
              </Box>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src={about} alt="About the game SVG" className="rounded mx-auto d-block"/>
            </Col>
         </Row>
        </Container>
      </WebsiteLayout>
    </Fragment>
});
