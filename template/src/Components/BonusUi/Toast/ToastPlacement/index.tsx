import { Card, CardBody, Col, Form, FormGroup, Input } from "reactstrap";
import { useState } from "react";
import { PlacementToastContent } from "./PlacementToastContent";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ToastPlacements } from "@/Constant";
import { PlacementData, PlacementListData } from "@/Data/BonusUi/Toaste";

const ToastPlacement = () => {
  const [data, setData] = useState("");

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={ToastPlacements} span={PlacementData} />
        <CardBody className="toast-rtl toast-dark">
          <Form>
            <FormGroup className="mb-3">
              <Input type="select" className="mt-2" onChange={(e) => setData(e.target.value)}>
                <option defaultValue="">Select a position...</option>
                {PlacementListData.map(({ className, text }, index) => (
                  <option value={className} key={index}>{text}</option>
                ))}
              </Input>
            </FormGroup>
          </Form>
          <PlacementToastContent data={data} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ToastPlacement;
