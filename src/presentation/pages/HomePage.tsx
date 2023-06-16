import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Typography } from "@mui/material";
import { Fragment, memo } from "react";
import { useIntl } from "react-intl";
import { Box } from "@mui/system";
import { Seo } from "@presentation/components/ui/Seo";
import { ContentCard } from "@presentation/components/ui/ContentCard";
import home from "@presentation/assets/img/home.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "@presentation/assets/styles/homepage.scss"

export const HomePage = memo(() => {
  const { formatMessage } = useIntl();
  const styles = {
    img: {
      width: "500px",
      height: "600px",
    }
  };

  return <Fragment>
      <Seo title="MyLife The Game | Home" />
      <WebsiteLayout>
        <Container fluid>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Box>
                <ContentCard title={formatMessage({ id: "texts.quoteTitle" })}>
                  <Typography>{formatMessage({ id: "texts.quoteByJordan" })}</Typography>
                </ContentCard>
              </Box>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src={home} alt="Home SVG" className="rounded mx-auto d-block"/>
            </Col>
         </Row>
        </Container>
      </WebsiteLayout>
    </Fragment>
});
