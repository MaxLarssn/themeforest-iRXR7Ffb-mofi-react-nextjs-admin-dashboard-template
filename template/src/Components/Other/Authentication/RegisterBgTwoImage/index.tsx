import RatioImage from "@/CommonComponent/RatioImage";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { RegisterForm } from "../Common/RegisterForm";
import { ImagePath } from "@/Constant";

const RegisterBgTwoImageContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="7">
          <RatioImage className="bg-img-cover bg-center" src={`${ImagePath}/login/1.jpg`} alt="looginpage" />
        </Col>
        <Col xl="5" className="p-0">
          <div className="login-card login-dark">
            <RegisterForm logoClass="text-start" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterBgTwoImageContainer;
