import { TextProps } from './type';

import { Text } from '.';

export default {
  title: 'commons/Text/Text',
  component: Text,
};
export const Default = (args: TextProps) => <Text {...args}>안녕 텍스트</Text>;
Default.args = {};
