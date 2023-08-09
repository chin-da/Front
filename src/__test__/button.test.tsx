import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Home from '@/pages';

describe('홈 페이지', async () => {
  test('버튼을 렌더링 합니다.', () => {
    render(<Home />);

    const PrimaryButtons = screen.getAllByRole('button', {
      name: 'Primary Button',
    });

    expect(PrimaryButtons).toHaveLength(2);
  });
});
