import { Story } from '@storybook/react';

import { PencilLoadingProps } from './type';

import { PencilLoading } from '.';

const storyMeta = {
  title: 'commons/Loading/Pencil',
  component: Text,
};

export default storyMeta;

export const Pencil: Story<PencilLoadingProps> = (args) => (
  <>
    <PencilLoading {...args} />
  </>
);

Pencil.args = {
  children: (
    <>
      <b>this</b> is text
    </>
  ),
};
