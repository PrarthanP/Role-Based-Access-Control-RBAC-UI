// src/components/ui/tabs.js
import React from 'react';

export const Tabs = ({ children, defaultValue }) => {
  return <div>{children}</div>
};
export const TabsList = ({ children, className }) => {
  return <div className={`flex space-x-4 ${className}`}>{children}</div>;
};

export const TabsTrigger = ({ value, children }) => {
  return (
    <button className="py-2 px-4 text-gray-600 hover:text-blue-500">
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children }) => {
  return <div>{children}</div>;
};