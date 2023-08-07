import { CardProps } from './type';

import { Card } from '.';

export default {
  title: 'commons/Card',
  component: Card,
};
export const Default = (args: CardProps) => <Card {...args}>Card</Card>;
Default.args = {
  style: { width: '300px' },
  decoration: 'top',
};
