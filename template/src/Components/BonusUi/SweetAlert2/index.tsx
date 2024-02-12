import { Container, Row } from "reactstrap";
import BasicExample from "./BasicExample";
import TitleWithTextUnder from "./TitleWithTextUnder";
import InfoAlert from "./InfoAlert";
import WarningAlert from "./WarningAlert";
import PikachuAlert from "./PikachuAlert";
import QuestionsAlert from "./QuestionsAlert";
import UsernameAlert from "./UsernameAlert";
import SuccessMessage from "./SuccessMessage";
import DangerAlert from "./DangerAlert";
import WarningMode from "./WarningMode";
import AutoCloseTimer from "./AutoCloseTimer";
import AjaxRequestMovie from "./AjaxRequestMovie";

const SweetAlertsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicExample />
        <TitleWithTextUnder />
        <InfoAlert />
        <WarningAlert />
        <PikachuAlert />
        <QuestionsAlert />
        <UsernameAlert />
        <SuccessMessage />
        <DangerAlert />
        <WarningMode />
        <AutoCloseTimer />
        <AjaxRequestMovie />
      </Row>
    </Container>
  );
};

export default SweetAlertsContainer;
