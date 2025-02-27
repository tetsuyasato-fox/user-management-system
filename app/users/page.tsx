'use client';

import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../utils/api';
import { User } from '../../types/User';
import UserCard from '../../components/UserCard';
import { Typography, CircularProgress, Alert, Box } from '@mui/material';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

//⼀覧ページにアクセスした際にユーザーの⼀覧が表⽰
//・useEffectを使用して、APIで全データ取得
//・try,catch構文で記述
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        console.log(data);
        setUsers(data);
      } catch (err) {
        setError('ユーザーの取得に失敗しました。' + err);
      } finally {
        setLoading(false);
      }
    };

    
    getUsers();
  }, [])

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ユーザー一覧
      </Typography>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </Box>
  );
}

export default UsersPage;