import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import { Bell, ChevronDown } from "react-feather";

export const StaticAccordion = () => {
  return (
    <AccordionItem>
      <AccordionHeader targetId="1" className="gap-2 bg-light-secondary txt-secondary">
        <Bell className="svg-wrapper txt-secondary"/><span className="txt-secondary ms-2">Keep in touch</span><ChevronDown className="svg-color txt-secondary" />
      </AccordionHeader>
      <AccordionBody accordionId="1">
        <p>
          <em className="txt-danger"> " This page might not behave as expected because Windows Internet Explorer isn't configured to load unsigned ActiveX controls."</em> or "Allow this page to install an unsigned ActiveX Control? Doing so from untrusted sources may harm your computer." (Both phrased as conditions that may cause future problems.)
        </p>
      </AccordionBody>
    </AccordionItem>
  );
};
