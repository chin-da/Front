import Icon from '@/components/common/Icon';

import { SelectProps } from './type';
import * as S from './style';

const Select = ({
  labels,
  values,
  placeholder,
  hasSideContent = true,
  ...props
}: SelectProps) => {
  return (
    <S.SelectWrapper>
      <S.Select {...props} defaultValue={placeholder || ''}>
        {placeholder != null ? (
          <S.Option value={placeholder} hidden disabled>
            {placeholder}
          </S.Option>
        ) : null}

        {labels.map((optionName, idx) => (
          <S.Option key={optionName} value={values[idx]}>
            {optionName}
          </S.Option>
        ))}
      </S.Select>

      {hasSideContent ? (
        <S.SideContent>
          <Icon iconName="arrowDown" />
        </S.SideContent>
      ) : null}
    </S.SelectWrapper>
  );
};

export default Select;
