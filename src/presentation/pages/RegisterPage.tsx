import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Fragment, memo } from "react";
import { Box } from "@mui/material";
import { Seo } from "@presentation/components/ui/Seo";
import { RegisterForm } from "@presentation/components/forms/Register/RegisterForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import register from "@presentation/assets/img/register.svg";

export const RegisterPage = memo(() => {
    return <Fragment>
        <Seo title="MyLife The Game | Register" />
        <WebsiteLayout>
            <Container fluid>
                <Row>
                    <Col xs={12} md={8} lg={8}>
                        <Box sx={{ padding: "0px 50px 0px 50px", justifyItems: "center" }}>
                            <RegisterForm />
                        </Box>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <img src={register} style={{width:"400px", height:"450px", marginTop:"130px"}} alt="challenges SVG" className="rounded mx-auto d-block"/>
                    </Col>
                </Row>
            </Container>
        </WebsiteLayout>
    </Fragment>
});
