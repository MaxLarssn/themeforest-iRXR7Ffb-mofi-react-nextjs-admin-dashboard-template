import { Card, CardBody, CardHeader, Col, Input } from "reactstrap";
import { HelpCircle, Search } from "react-feather";
import { SearchArticles, SearchArticlesPlaceholder } from "@/Constant";

const SearchArticle = () => {
  return (
    <Col lg="12">
      <Card className="card-mb-faq xs-mt-search">
        <CardHeader className="faq-header card-no-border pb-0">
          <h4>{SearchArticles}</h4>
          <HelpCircle />
        </CardHeader>
        <CardBody className="faq-body">
          <div className="faq-form">
            <Input type="text" placeholder={SearchArticlesPlaceholder} />
            <Search className="search-icon" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SearchArticle;
