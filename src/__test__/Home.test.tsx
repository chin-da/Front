import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Home from '@/pages';

describe('[ 홈 페이지 ]', () => {
  test('버튼을 렌더링 합니다.', () => {
    const result = render(<Home />);

    const LargePrimaryButton = result.getByRole('button', {
      name: 'Large Primary Button',
    });
    const LargeSecondaryButton = result.getByRole('button', {
      name: 'Large Secondary Button',
    });
    const SmallPrimaryButton = result.getByRole('button', {
      name: 'Small Primary Button',
    });
    const SmallSecondaryButton = result.getByRole('button', {
      name: 'Small Secondary Button',
    });

    expect(LargePrimaryButton).toBeInTheDocument();
    expect(LargeSecondaryButton).toBeInTheDocument();
    expect(SmallPrimaryButton).toBeInTheDocument();
    expect(SmallSecondaryButton).toBeInTheDocument();
  });
});
