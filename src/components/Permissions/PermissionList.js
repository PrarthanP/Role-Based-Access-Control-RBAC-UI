// src/components/Permissions/PermissionList.js
import React from 'react';

const PermissionList = ({ permissions }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Permission List</h2>
      <ul>
        {permissions.map(permission => (
          <li key={permission.id}>{permission.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionList;