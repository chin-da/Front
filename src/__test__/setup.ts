import { afterEach, expect, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

beforeAll(() => {
  vi.mock('next/font/google', () => ({
    Noto_Sans_KR: () => ({
      style: {
        fontFamily: '',
      },
    }),
  }));
});

afterEach(() => {
  cleanup();
});
