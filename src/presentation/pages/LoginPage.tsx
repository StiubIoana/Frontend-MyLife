import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Fragment, memo } from "react";
import { Box } from "@mui/material";
import { Seo } from "@presentation/components/ui/Seo";
import { LoginForm } from "@presentation/components/forms/Login/LoginForm";
import { useIntl } from "react-intl";
import { Link } from 'react-router-dom';
import { AppRoute } from 'routes';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import login from "@presentation/assets/img/login.svg";

export const LoginPage = memo(() => {
    const { formatMessage } = useIntl();
    return <Fragment>
        <Seo title="MyLife The Game | Login" />
        <WebsiteLayout>
            <Container fluid>
                <Row>
                    <Col xs={12} md={8} lg={8}>
                        <Box sx={{ padding: "0px 50px 0px 50px", justifyItems: "center" }}>
                            <LoginForm />
                            
                            <Box sx={{ marginTop: '10px', border: '1px solid grey', textAlign:'center' }}>
                                <p style={{marginTop: '10px'}}>{formatMessage({ id: "texts.noAccount" })} 
                                    <Link  to={AppRoute.Register}>
                                    {formatMessage({ id: "texts.clickHere" })}
                                    </Link>
                                </p>
                            </Box>
                        </Box>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <img src={login} style={{width:"400px", height:"350px", marginTop:"100px"}} alt="challenges SVG" className="rounded mx-auto d-block"/>
                    </Col>
                </Row>
            </Container>
        </WebsiteLayout>
    </Fragment>
});
