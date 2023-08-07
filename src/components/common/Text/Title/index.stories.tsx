import { TitleProps } from './type';

import { Title } from '.';

export default {
  title: 'commons/Text/Title',
  component: Title,
};
export const Default = (args: TitleProps) => <Title {...args}>안녕 타이틀</Title>;
Default.args = {};
