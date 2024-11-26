// src/components/ui/badge.js
import React from 'react';

export const Badge = ({ children }) => {
  return (
    <span className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm">
      {children}
    </span>
  );
};