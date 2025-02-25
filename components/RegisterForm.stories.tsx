// components/RegisterForm.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import RegisterForm from './RegisterForm';

const meta: Meta<typeof RegisterForm> = {
  title: 'Components/RegisterForm',
  component: RegisterForm,
};

export default meta;

type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
  
    //今回は、新規登録画面なのでなし

};
