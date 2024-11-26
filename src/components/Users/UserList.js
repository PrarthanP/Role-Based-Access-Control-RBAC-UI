// src/components/Users/UserList.js
import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">User  List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;