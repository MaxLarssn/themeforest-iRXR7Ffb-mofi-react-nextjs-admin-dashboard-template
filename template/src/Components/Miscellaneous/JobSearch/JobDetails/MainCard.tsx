import { ApplyForThisJob, EndLessDesigner, Href, ImagePath, ProductDesignerMainCard, SimilarJobs, StarColorTwo } from "@/Constant";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { Button, Card, CardBody, Row } from "reactstrap";
import SimilarJobsCards from "./SimilarJobsCards";
import JobDescription from "./jobDescription";

const MainCard = () => {
  return (
    <>
      <Card>
        <div className="job-search">
          <CardBody>
            <div className="d-flex">
              <img className="img-40 b-r-0 img-fluid m-r-20" src={`${ImagePath}/job-search/1.jpg`} alt="job-search"/>
              <div className="flex-grow-1">
                <h6 className="f-w-600">
                  <Link href={Href}>{ProductDesignerMainCard}</Link>
                  <span className="pull-right">
                    <Button color="primary">{ApplyForThisJob}</Button>
                  </span>
                </h6>
                <p>{EndLessDesigner}
                  <Rating className="ms-1" fillColor={StarColorTwo} initialValue={Math.random() * 5} size={14}/>
                </p>
              </div>
            </div>
            <JobDescription />
          </CardBody>
        </div>
      </Card>
      <div className="header-faq">
        <h4 className="mb-0 f-w-600">{SimilarJobs}</h4>
      </div>
      <Row>
        <SimilarJobsCards limit={5} jobClass={'col-xl-6 xl-100 box-col-12'} ribbon={false} column={true}/> 
      </Row>
    </>
  );
};

export default MainCard;
