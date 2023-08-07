import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { AccordionWrapper, StyledAccordionBody, StyledAccordionHeader, StyledAccordionList } from './style';

export interface AccordionProps extends ComponentPropsWithoutRef<typeof AccordionWrapper> {
  children?: ReactNode;
  expanded?: boolean;
}

export interface AccordionHeaderProps extends ComponentPropsWithoutRef<typeof StyledAccordionHeader> {
  children?: ReactNode;
}

export interface AccordionBodyProps extends ComponentPropsWithoutRef<typeof StyledAccordionBody> {
  children?: ReactNode;
}
export interface AccordionListProps extends ComponentPropsWithoutRef<typeof StyledAccordionList> {
  children?: ReactNode;
}
