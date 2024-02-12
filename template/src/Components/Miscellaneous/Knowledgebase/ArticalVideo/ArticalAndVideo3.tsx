import { ArticalAndVideoThird } from "@/Data/Miscellaneous/Knowledgebase";
import { Card, CardBody, Col, Row } from "reactstrap";

const ArticalAndVideo3 = () => {
  return (
    <Col xl="4">
      <Row>
        {ArticalAndVideoThird.map((item, i) => (
          <Col xl="12" md={item.md} key={i}>
            <Card>
              <CardBody>
                <div className="d-flex">
                  {item.iconClass}
                  <div className="flex-grow-1">
                    <h5 className="f-w-600">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default ArticalAndVideo3;
