import { Button } from '../Button';
import { Card } from '../Card';

import { ClickEffect } from '.';

export default {
  title: 'commons/ClickEffect',
  component: ClickEffect,
};

export const Default = () => (
  <>
    <Card>
      <ClickEffect>
        <Button>버튼</Button>
      </ClickEffect>
    </Card>
    <ClickEffect effect="spread" duration="400ms" bgColor="red">
      <Card>
        <Button>버튼</Button>
      </Card>
    </ClickEffect>
    <ClickEffect>
      <Button style={{ position: 'absolute', top: '100px', left: '100px' }}>버튼</Button>
    </ClickEffect>
  </>
);
Default.args = {};
