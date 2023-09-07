import { ChangeEvent, FormEvent, useState } from 'react';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import { DATES, MONTHS, YEARS } from '@/constants/birthDates';
import FormRow from '@/components/signup/SignupForm/FormRow';
import TextField from '@/components/signup/SignupForm/TextField';
import Select from '@/components/signup/SignupForm/Select';

import * as S from './style';

const INITIAL_SINGUP_DATA = {
  nickname: '',
  'birth-y': '',
  'birth-m': '',
  'birth-d': '',
  gender: '',
  height: '',
  weight: '',
  'sbd-s': '',
  'sbd-b': '',
  'sbd-d': '',
};

export default function SignupView() {
  const [signupData, setSignupData] =
    useState<typeof INITIAL_SINGUP_DATA>(INITIAL_SINGUP_DATA);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setSignupData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitSignupData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // api call with signupData
  };

  return (
    <S.Layout>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.Title>회원정보를 입력해주세요</S.Title>
          <Text isRequired>필수 입력사항</Text>
        </S.HeaderWrapper>
        <S.SignupForm id="signupForm" onSubmit={onSubmitSignupData}>
          <FormRow
            id="nickname"
            label="닉네임"
            isRequired
            bottomText="*8자 이내"
            errorMessage="닉네임을 입력해주세요"
          >
            <TextField
              name="nickname"
              value={signupData.nickname}
              onChange={onChange}
              placeholder="닉네임"
              error={signupData.nickname === ''}
              sideContent={<Button>중복 확인</Button>}
            />
          </FormRow>
          <FormRow
            id="birth"
            label="생년월일"
            isRequired
            errorMessage="생년월일을 입력해주세요"
            direction="row"
          >
            <Select
              id="birth"
              name="birth-y"
              labels={YEARS.map(year => year + '년')}
              values={YEARS}
              onChange={onChange}
              error={signupData['birth-y'] === ''}
              placeholder="년도"
            />
            <Select
              name="birth-m"
              labels={MONTHS.map(month => month + '월')}
              values={MONTHS}
              onChange={onChange}
              error={signupData['birth-m'] === ''}
              placeholder="월"
            />
            <Select
              name="birth-d"
              labels={DATES.map(date => date + '일')}
              values={DATES}
              onChange={onChange}
              error={signupData['birth-d'] === ''}
              placeholder="일"
            />
          </FormRow>
          <FormRow
            id="gender"
            label="성별"
            isRequired
            errorMessage="성별을 선택해주세요"
          >
            <Select
              name="gender"
              labels={['남성', '여성', '기타']}
              values={['M', 'F', 'X']}
              error={signupData.gender === ''}
              onChange={onChange}
              placeholder="성별"
              hasSideContent={true}
            />
          </FormRow>
          <FormRow
            id="height"
            label="키"
            isRequired
            errorMessage="키를 입력해주세요"
          >
            <TextField
              name="height"
              type="number"
              value={signupData.height}
              onChange={onChange}
              placeholder="키"
              sideContent={<S.UnitText>kg</S.UnitText>}
              error={signupData.height === ''}
            />
          </FormRow>
          <FormRow
            id="weight"
            label="몸무게"
            isRequired
            errorMessage="몸무게를 입력해주세요"
          >
            <TextField
              name="weight"
              type="number"
              value={signupData.weight}
              onChange={onChange}
              placeholder="몸무게"
              sideContent={<S.UnitText>cm</S.UnitText>}
              error={signupData.weight === ''}
            />
          </FormRow>
          <FormRow id="sbd" label="3대 측정">
            <TextField
              name="sbd-s"
              value={signupData['sbd-s']}
              onChange={onChange}
              placeholder="스쿼트"
              sideContent={<S.UnitText>kg</S.UnitText>}
            />
            <TextField
              name="sbd-b"
              value={signupData['sbd-b']}
              onChange={onChange}
              placeholder="벤치프레스"
              sideContent={<S.UnitText>kg</S.UnitText>}
            />
            <TextField
              name="sbd-d"
              value={signupData['sbd-d']}
              onChange={onChange}
              placeholder="데드리프트"
              sideContent={<S.UnitText>kg</S.UnitText>}
            />
          </FormRow>
        </S.SignupForm>
        <Button size="large" color="primary" type="submit" form="signupForm">
          가입 완료
        </Button>
      </S.Wrapper>
    </S.Layout>
  );
}
