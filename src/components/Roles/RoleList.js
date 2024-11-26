// src/components/Roles/RoleList.js
import React from 'react';

const RoleList = ({ roles }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Role List</h2>
      <ul>
        {roles.map(role => (
          <li key={role.id}>{role.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoleList;