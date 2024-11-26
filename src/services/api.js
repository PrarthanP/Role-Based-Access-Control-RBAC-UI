// src/services/api.js
export const fetchUsers = async () => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(INITIAL_USERS);
      }, 1000);
    });
  };
  
  export const fetchRoles = async () => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(INITIAL_ROLES);
      }, 1000);
    });
  };