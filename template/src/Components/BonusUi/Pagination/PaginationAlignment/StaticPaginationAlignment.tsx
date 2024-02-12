import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href, Next, Previous } from "@/Constant";

export const StaticPaginationAlignment = () => {
  return (
    <Pagination className="pagination-warning pagin-border-warning m-b-30" aria-label="Page navigation example">
      <PaginationItem><PaginationLink href={Href} previous>{Previous}</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href={Href}>2</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href={Href} next>{Next}</PaginationLink></PaginationItem>
    </Pagination>
  );
};
