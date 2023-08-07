import { CircleStyled, SpinnerWrapper } from './style';

export function Spinner() {
  return (
    <SpinnerWrapper viewBox="0 0 50 50">
      <CircleStyled cx="25" cy="25" r="20" fill="none" strokeWidth="5"></CircleStyled>
    </SpinnerWrapper>
  );
}
