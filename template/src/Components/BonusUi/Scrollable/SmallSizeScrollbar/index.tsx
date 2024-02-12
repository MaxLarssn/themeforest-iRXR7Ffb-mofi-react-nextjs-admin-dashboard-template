import { Card, CardBody, Col } from "reactstrap";
import ScrollBar from "react-perfect-scrollbar";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, SmallSizeScrollbars, SolutionBusinessTransformation } from "@/Constant";
import { SmallSizeScroll } from "@/Data/BonusUi/Scrollable";
import Image from "next/image";

const SmallSizeScrollbar = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={SmallSizeScrollbars} span={SmallSizeScroll} />
        <CardBody>
          <div className="scroll-bar-wrap">
            <ScrollBar className="scrollbar-margins large-margin scroll-demo pe-0" style={{width:"100%", height:"300px"}}>
              <div className="margin-scrollbar">
                <h5 className="pb-2">{SolutionBusinessTransformation}</h5>
              </div>
              <p>The Business Transformation Solution programme is a <em className="txt-danger">multi-level engagement program</em> is designed to help Small and Medium-Sized Businesses and Startups create a strong, well-functioning business organization that produces the best results quickly and effectively.
                <img className="img-fluid pt-3" src={`${ImagePath}/banner/3.jpg`} alt="business"  />
              </p>
              <p>The core of the programme is our internally developed <em className="txt-danger">Business Management model</em> , "Business Foundation & Management", which was tried and true for Indian business conditions while drawing inspiration from other successful global SME Business Management techniques.</p>
            </ScrollBar>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SmallSizeScrollbar;
