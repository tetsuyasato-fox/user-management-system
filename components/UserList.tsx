import React from 'react';
import { User } from '../types/User'; 
import UserCard from './UserCard';

// UserListPropsインターフェースの定義
interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h2>ユーザーリスト</h2>
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;

