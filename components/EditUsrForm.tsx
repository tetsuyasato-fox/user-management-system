// components/EditUserForm.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { fetchUserById, updateUser } from "../utils/api";


// EditUserFormInputsでname,email,roleをinterfaceで定義、全てstring型
interface EditUserFormInputs {
  name: string;
  email: string;
  role: string;
}

//成功後のリダイレクトなどを行うため、EditUserFormPropsでuserId,onSuccess,onError,disabledをinterfaceで定義
interface EditUserFormProps {
  userId: number;
  onSuccess?: () => void;
  onError?: (error: any) => void;
  disabled?: boolean;
}

// コンポーネントは EditUserFormProps で定義した内容を受け取ることができる
const EditUserForm: React.FC<EditUserFormProps> = ({
  //React.FC<EditUserProps>でコンポーネントに型指定
  userId,
  onSuccess, //引数としてuserId,onSuccess,onError,disabled=falseをpropsで設定
  onError,
  disabled = false, //disabledはboolean型で初期値はfalse
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditUserFormInputs>();
  //各種ハンドリングのための変数をstate管理
  const [error, setError] = React.useState<string | null>(null); //error：string型 or null、エラー文のハンドリング、初期値はnull
  const [success, setSuccess] = React.useState<boolean>(false); //success：boolean型、成功時のメッセージ管理用、初期値はfalse

  //ユーザーの編集機能の実装
  //ユーザー情報の取得（初期表示）、編集、更新に分けて記載
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userdata = await fetchUserById(userId);

        if (userdata) {
          // ユーザー情報を取得できた場合
          setValue("name", userdata.name);
          setValue("email", userdata.email);
          setValue("role", userdata.role);
        } else {
          // ユーザーが見つからなかった場合
          setError("ユーザーが見つかりませんでした");
        }
      } catch (err) {
        setError("ユーザー情報の取得に失敗しました");
      }
    };
    fetchUser();
  }, [userId, setValue]);

  const onSubmit: SubmitHandler<EditUserFormInputs> = async (data) => {
    try {
      await updateUser(userId, data);
      setSuccess(true);
      setError(null);
      if (onSuccess) onSuccess(); //定型文で覚える
    } catch (err) {
      setError("ユーザーの登録に失敗しました。" + err);
      setSuccess(false);
      if (onError) onError(err);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        ユーザー情報編集
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 名前フィールド */}
        <TextField
          label="名前"
          fullWidth
          margin="normal"
          {...register("name", { required: "名前は必須です。" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        {/* メールフィールド */}
        <TextField
          label="メール"
          type="email"
          fullWidth
          margin="normal"
          {...register("email", {
            required: "メールは必須です。",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "有効なメールアドレスを入力してください。",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        {/* ロールフィールド */}
        <TextField
          label="役職"
          fullWidth
          margin="normal"
          {...register("role", { required: "ロール設定は必須です。" })}
          error={!!errors.role}
          helperText={errors.role?.message}
        />
        {/* 更新ボタン */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={disabled}
        >
          更新
        </Button>
      </form>
    </Box>
  );
};

export default EditUserForm;
