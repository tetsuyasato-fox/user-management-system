// app/users/[id]/edit/page.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import EditUserForm from "../../../../components/EditUserForm";
import { useParams, useRouter } from "next/navigation";
import { Typography, Box } from "@mui/material";

// TODO: URLパラメータからユーザーIDを取得し、EditUserFormコンポーネントに渡す
const EditUserPage: React.FC = () => {
  const id = useParams().id;
  const roter = useRouter();

  const handleSuccess = () => {
    roter.push("/users");
  };

  const handleError = (error: any) => {
    console.error("登録エラー", error);
  };

  // ユーザーIDが取得できていない場合はnullを返す
  if (!id || Array.isArray(id)) {
    return <Typography>ユーザーIDが無効です。</Typography>;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ユーザー編集
      </Typography>

      <EditUserForm
        userId={Number(id)}
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </Box>
  );
};

export default EditUserPage;
