import { useState } from 'react';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Spinner } from '../Icon/Loading/Spinner';

import Toggle from '.';

export default {
  title: 'commons/Toggle',
  component: Toggle,
};

export const Default = () => {
  const [state, setstate] = useState<string[]>([]);
  const [state2, setstate2] = useState<string[]>([]);
  // useEffect(() => {
  //   console.warn(state);
  // }, [state]);
  return (
    <>
      <Toggle onValueChange={setstate} value={state} multiple={false}>
        <Toggle.Item value="value1" text="단일1 아이콘" icon={<Spinner />} />
        <Toggle.Item value="value2" text="단일2" />
        <Toggle.Item value="value3" text="단일3 아이콘" icon={<FontAwesomeIcon icon={faPowerOff} />} />
      </Toggle>
      <br />
      value is : {state}
      <br />
      <br />
      <Toggle onValueChange={setstate2} value={state2} multiple={true}>
        <Toggle.Item value="value1" text="멀티1" />
        <Toggle.Item value="value2" text="멀티2" />
        <Toggle.Item value="value3" text="멀티3" />
      </Toggle>
      <br />
      value is : {state2.toString()}
    </>
  );
};
Default.args = {};
