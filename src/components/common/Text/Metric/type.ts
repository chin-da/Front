import { ComponentPropsWithoutRef } from 'react';

import { MetricWrapper } from './style';

export interface MetricProps extends ComponentPropsWithoutRef<typeof MetricWrapper> {
  children: React.ReactNode;
}
