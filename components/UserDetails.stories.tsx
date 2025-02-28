// MetaとStoryは全てこの形で覚える
import type { Meta, StoryObj } from "@storybook/react";
import UserDetails from "./UserDetails";

const meta: Meta<typeof UserDetails> = {
  title: "Components/UserDetails",//ページ配下の指定
  component: UserDetails,
};

export default meta;

type Story = StoryObj<typeof UserDetails>;

export const Default: Story = {
    args: {
        user:  {
            id: 1,
            name: '山田 太郎',
            email: 'taro.yamada@example.com',
            role: '管理者',
            deleted: false,
          },
          
      },
};
