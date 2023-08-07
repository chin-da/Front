import { Story } from '@storybook/react';

import { SpinnerLoadingProps } from './type';

import { SpinnerLoading } from '.';

const storyMeta = {
  title: 'commons/Loading/Spinner',
  component: Text,
};

export default storyMeta;

export const Spinner: Story<SpinnerLoadingProps> = (args) => (
  <>
    <SpinnerLoading {...args} />
  </>
);

Spinner.args = {
  children: (
    <>
      <b>this</b> is text
    </>
  ),
};
