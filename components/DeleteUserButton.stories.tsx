// components/RegisterForm.stories.tsx

// MetaとStoryは全てこの形で覚える
// Meta（コンポーネントのメタ情報）と Story（ストーリーの型）をインポート
import type { Meta, StoryObj } from "@storybook/react";

// 削除ボタンコンポーネントをインポート
import DeleteUserButton from "./DeleteUserButton";

// `meta` オブジェクトを定義し、Storybook にコンポーネントの情報を提供
const meta: Meta<typeof DeleteUserButton> = {
  title: "Components/DeleteUserButton", // Storybook のUI上の表示パス（カテゴリ）
  component: DeleteUserButton, // Storybook で表示する対象のコンポーネント
};

// `meta` をデフォルトエクスポート（Storybook がこの情報を基にUIを構築する）
export default meta;

// `Story` 型の定義（DeleteUserButton のストーリーオブジェクトを作るための型）
type Story = StoryObj<typeof DeleteUserButton>;

// `Default` という名前のストーリーを作成（Storybook でこのパターンを表示）
export const Default: Story = {
    args: {
      userId: 1, // 例としてユーザーIDを 1 に設定
      onDelete: () => alert("ユーザーを削除しました"), // 削除時のログ出力
    },
  };