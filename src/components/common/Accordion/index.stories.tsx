import Accordion from '.';
import { AccordionProps } from './type';

export default {
  title: 'commons/Accordion',
  component: Accordion,
};

export const Default = (args: AccordionProps) => (
  <>
    <Accordion.Item expanded={true}>
      <Accordion.Header>아코디언 단일</Accordion.Header>
      <Accordion.Body>단일</Accordion.Body>
    </Accordion.Item>
    <br />
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>아코디언 리스트1</Accordion.Header>
        <Accordion.Body>리스트 1</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item expanded={true}>
        <Accordion.Header>아코디언 리스트2</Accordion.Header>
        <Accordion.Body>리스트 2</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>아코디언 리스트3</Accordion.Header>
        <Accordion.Body>리스트 3</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </>
);
Default.args = {
  expanded: true,
};
