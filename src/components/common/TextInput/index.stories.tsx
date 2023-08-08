import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTag } from '@fortawesome/free-solid-svg-icons';

import { useInputState } from '@/hooks';

import { TextInputProps } from './type';

import { TextInput } from '.';

export default {
  title: 'commons/TextInput',
  component: TextInput,
};
export const Default = (args: TextInputProps) => {
  const [value, setValue] = useInputState('');
  return (
    <>
      <br />
      <TextInput
        value={value}
        placeholder={'기본 폼'}
        onChange={setValue}
        {...args}
        style={{ width: '200px' }}
      />
      <br />
      <TextInput
        icon={<FontAwesomeIcon icon={faSearch} style={{ opacity: 0.5 }} />}
        value={value}
        placeholder={'검색 폼'}
        onChange={setValue}
        status="reset"
        style={{ width: '200px' }}
        {...args}
      />
      <br />
      <br />
      <TextInput
        icon={<FontAwesomeIcon icon={faTag} style={{ opacity: 0.5 }} />}
        value={value}
        label="이름"
        placeholder={'아이콘 라벨 폼'}
        onChange={setValue}
        style={{ width: '200px' }}
        {...args}
      />
      <br />
      <TextInput
        value={value}
        label="이메일"
        status={'error'}
        statusMessage={'에러입니다.'}
        placeholder={'라벨 에러 폼'}
        onChange={setValue}
        style={{ width: '205px', paddingTop: '5px' }}
        {...args}
      />
      <br />
      <br />
      <TextInput
        value={value}
        label="전화번호"
        status={'success'}
        statusMessage={'성공입니다.'}
        placeholder={'라벨 성곰 폼'}
        onChange={setValue}
        style={{ width: '200px', paddingTop: '20px' }}
        {...args}
      />
      <br />
      <br />
      <TextInput
        placeholder={'비활성 폼'}
        disabled={true}
        style={{ width: '400px' }}
        {...args}
      />
    </>
  );
};
Default.args = {};
