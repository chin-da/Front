import { MetricProps } from './type';
import { Title } from '../Title';
import { Subtitle } from '../Subtitle';
import { Text } from '../Text';

import { Metric } from '.';

export default {
  title: 'commons/Text/Metric',
  component: Metric,
};
export const Default = (args: MetricProps) => (
  <>
    <Metric>안녕 메트릭 , 메트릭.</Metric>
    <br />
    <Title>안녕 제목 , 제목.</Title>
    <br />
    <Subtitle>안녕 부제목 , 부제목.</Subtitle>
    <br />
    <Text>안녕 텍스트 , 텍스트.</Text>
  </>
);
Default.args = {};
