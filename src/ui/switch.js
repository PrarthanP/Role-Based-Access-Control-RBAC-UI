// src/components/ui/switch.js
import React from 'react';

export const Switch = ({ checked, onChange }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className="ml-2">Toggle</span>
    </label>
  );
};