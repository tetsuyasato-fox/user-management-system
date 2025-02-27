import React, { useState } from 'react';
import { User } from '../types/User'; 
import UserCard from './UserCard';

// UserListPropsインターフェースの定義
interface UserListProps {
  initialUsers: User[];
}

const UserList: React.FC<UserListProps> = ({ initialUsers }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  return (
    <div>
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;

