import { SubtitleProps } from './type';

import { Subtitle } from '.';

export default {
  title: 'commons/Text/Subtitle',
  component: Subtitle,
};
export const Default = (args: SubtitleProps) => <Subtitle {...args}>안녕 서브타이블</Subtitle>;
Default.args = {};
