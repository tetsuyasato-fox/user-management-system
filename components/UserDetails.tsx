import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { User } from '../types/User';

// UserDetailsPropsインターフェースの定義
// User型のuserプロパティを受け取る
interface UserDetailsProps {
  user: User; // User型で定義
}

// UserDetailsコンポーネントの作成
const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    // ユーザー詳細情報を表示するカードコンポーネント
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        {/* 見出し */}
        <Typography variant="h5" component="div">
          ユーザー詳細
        </Typography>
        {/* ユーザーIDの表示 */}
        <Typography variant="body1">
          ID: {user.id}
        </Typography>
        {/* ユーザー名の表示 */}
        <Typography variant="body1">
          名前: {user.name}
        </Typography>
        {/* メールアドレスの表示 */}
        <Typography variant="body1">
          メールアドレス: {user.email}
        </Typography>
        {/* 役職の表示 */}
        <Typography variant="body1">
          役職: {user.role}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserDetails;
