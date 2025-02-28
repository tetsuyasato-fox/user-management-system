import React from "react"; // Reactをインポート
import { Button } from "@mui/material"; // MUIのButtonコンポーネントをインポート
import { softDeleteUser } from "../utils/api"; // ユーザーの論理削除APIをインポート

interface DeleteUserButtonProps {
  userId: number; // ユーザーID（削除対象のユーザー）
  onDelete: (userId: number) => void; // データ更新・再レンダリング用の関数
}

//DeleteUserButtonを定義、DeleteUserButtonProps 型の props を受け取る
//userIdとonDeleteの2つのプロパティ
const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({
  userId,
  onDelete,
}) => {
  const handleDelete = async () => {
    if (window.confirm("本当にこのユーザーを削除しますか？")) {
      // 確認ダイアログを表示
      try {
        await softDeleteUser(userId); // APIを呼び出して論理削除を実行
        onDelete(userId); // 親コンポーネントの更新処理を呼び出し
      } catch (error) {
        console.error("ユーザーの削除に失敗しました", error); // エラーハンドリング
      }
    }
  };

  return (
    <Button
      variant="contained" // ボタンのスタイルを「contained」に設定
      color="secondary" // ボタンの色を「secondary」に設定（警告色）
      onClick={handleDelete} // ボタンがクリックされたときの処理を設定
      aria-label="ユーザー削除" // アクセシビリティのためのラベルを追加
    >
      削除
    </Button> // 削除済みなら「削除済み」、未削除なら「削除」を表示
  );
};

export default DeleteUserButton; // コンポーネントをエクスポート
