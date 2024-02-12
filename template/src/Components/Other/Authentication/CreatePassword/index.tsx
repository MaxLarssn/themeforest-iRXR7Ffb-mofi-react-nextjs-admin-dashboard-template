import { CreateYourAccount, CreateYourPassword, DoneButton, DontHaveAccount, ImagePath, RememberPassword, RetypePassword } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

const CreatePasswordContainer = () => {
  const [show, setShow] = useState(false);
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <Container fluid className="p-0">
      <Row>
        <Col sm="12">
          <div className="login-card login-dark">
            <div>
              <div>
                <Link className="logo" href={`/${i18LangStatus}/dashboard/default_dashboard`}>
                  <img className="img-fluid for-light" src={`${ImagePath}/logo/logo.png`} alt="looginpage" />
                  <img className="img-fluid for-dark" src={`${ImagePath}/logo/logo_dark.png`} alt="looginpage" />
                </Link>
              </div>
              <div className="login-main">
                <Form className="theme-form" onSubmit={(e)=>e.preventDefault()}>
                  <h4>{CreateYourPassword}</h4>
                  <FormGroup>
                    <Label className="col-form-label">New Password</Label>
                    <div className="position-relative">
                      <Input type={show ? "text" : "password"} required placeholder="*********" />
                      <div className="show-hide" onClick={() => setShow(!show)}><span className="show" /></div>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{RetypePassword}</Label>
                    <Input type="password" required placeholder="*********" />
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <div className="checkbox p-0">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
                    </div>
                    <Button block color="primary" className="w-100">{DoneButton}</Button>
                  </FormGroup>
                  <p className="mt-4 mb-0">{DontHaveAccount}<Link className="ms-2" href={`/${i18LangStatus}/others/authentication/loginsimple`}>{CreateYourAccount}</Link>                  </p>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePasswordContainer;
