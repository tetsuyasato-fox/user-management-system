import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { User } from '../types/User';
import DeleteUserButton  from './DeleteUserButton';
import Link from 'next/link';

interface UserCardProps {
  user: User;
  handleDelete: (userId:number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, handleDelete }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography color="text.secondary">
          {user.email}
        </Typography>
        <Typography variant="body2">
          役割: {user.role}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} href={`/users/${user.id}/edit`}>編集</Button>
        <DeleteUserButton userId={user.id} onDelete ={handleDelete}  />
      </CardActions>
    </Card>
  );
}

export default UserCard;


