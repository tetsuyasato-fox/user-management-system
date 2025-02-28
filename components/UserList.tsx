import React, { useState } from "react";
import { User } from "../types/User";
import UserCard from "./UserCard";

// UserListPropsインターフェースの定義
interface UserListProps {
  initialUsers: User[];
}

const UserList: React.FC<UserListProps> = ({ initialUsers }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  // 削除処理実行後のフィルタリング関数
  const handleUserDelete = (deletedUserId: number) => {
    setUsers((prev) => prev.filter((user: User) => user.id !== deletedUserId));
  };
  return (
    <div>
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} handleDelete={handleUserDelete} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
