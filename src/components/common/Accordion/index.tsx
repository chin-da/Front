import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { forwardRef, memo, createContext, useState, useMemo, useContext } from 'react';

import { Text } from '../Text/Text';
import {
  AccordionWrapper,
  StyledAccordionBody,
  StyledAccordionHeader,
  StyledAccordionList,
  StyledDownArrowIcon,
  StyledIcon,
} from './style';
import { AccordionBodyProps, AccordionHeaderProps, AccordionListProps, AccordionProps } from './type';

const AccordionContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([
  false,
  () => {
    return;
  },
]);

const Accordion = memo(
  forwardRef<HTMLDivElement, AccordionProps>(({ expanded = false, children, ...restProps }, ref) => {
    const accordionState = useState<boolean>(expanded);
    const context = useMemo(() => accordionState, [accordionState]);
    return (
      <AccordionContext.Provider value={context}>
        <AccordionWrapper ref={ref} {...restProps}>
          {children}
        </AccordionWrapper>
      </AccordionContext.Provider>
    );
  }),
);

const AccordionHeader = memo(
  forwardRef<HTMLButtonElement, AccordionHeaderProps>(({ children, ...restProps }, ref) => {
    const [isOpen, setIsOpen] = useContext(AccordionContext);
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
    return (
      <StyledAccordionHeader ref={ref} {...restProps} onClick={handleClick}>
        {children}
        <StyledIcon isOpen={isOpen}>
          <StyledDownArrowIcon icon={faAngleDown} />
        </StyledIcon>
      </StyledAccordionHeader>
    );
  }),
);
const AccordionBody = memo(
  forwardRef<HTMLDivElement, AccordionBodyProps>(({ children, ...restProps }, ref) => {
    const [isOpen] = useContext(AccordionContext);
    return (
      <StyledAccordionBody isOpen={isOpen} ref={ref} {...restProps}>
        <Text>{children}</Text>
      </StyledAccordionBody>
    );
  }),
);

const AccordionList = memo(
  forwardRef<HTMLDivElement, AccordionListProps>(({ children, ...restProps }, ref) => {
    return (
      <StyledAccordionList ref={ref} {...restProps}>
        {children}
      </StyledAccordionList>
    );
  }),
);

Accordion.displayName = 'Accordion';

export default Object.assign(AccordionList, {
  Header: AccordionHeader,
  Body: AccordionBody,
  Item: Accordion,
});
