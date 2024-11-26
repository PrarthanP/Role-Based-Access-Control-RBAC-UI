import React from 'react';

export const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded p-4">
        {children}
        <button onClick={() => onOpenChange(false)}>Close</button>
      </div>
    </div>
  );
};

export const DialogContent = ({ children }) => <div>{children}</div>;
export const DialogHeader = ({ children }) => <div className="mb-2">{children}</div>;
export const DialogTitle = ({ children }) => <h2 className="text-lg font-bold">{children}</h2>;