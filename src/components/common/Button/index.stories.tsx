import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ButtonProps } from './type';

import { Button } from '.';

export default {
  title: 'commons/Button',
  component: Button,
};
export const Default = (args: ButtonProps) => {
  return (
    <>
      <Button {...args}>버튼</Button>
      <br />
      <Button icon={<FontAwesomeIcon icon={faSearch} />} {...args}>
        아이콘버튼
      </Button>
      <br />
      <Button loading {...args}>
        로딩 버튼
      </Button>
      <br />
    </>
  );
};
Default.args = {
  size: 'sm',
  variant: 'primary',
};
