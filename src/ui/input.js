// src/components/ui/input.js
import React from 'react';

export const Input = ({ placeholder, defaultValue }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      defaultValue={defaultValue}
      className="border rounded p-2 w-full"
    />
  );
};