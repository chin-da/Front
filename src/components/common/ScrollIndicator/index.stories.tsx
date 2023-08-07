import { ScrollIndicator } from '.';
import { useRef } from 'react';
export default {
  title: 'commons/ScrollIndicator',
  component: ScrollIndicator,
};

export const Default = () => {
  const ref = useRef(null);
  return (
    <div>
      <ScrollIndicator targetRef={ref} />
      <div ref={ref} style={{ height: '500vh' }}></div>
    </div>
  );
};

Default.args = {};
