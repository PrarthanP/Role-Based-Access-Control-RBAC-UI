// src/components/Users/UserDialog.js
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const UserDialog = ({ open, onClose, user, onSave }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{user ? 'Edit User' : 'Add User'}</DialogTitle>
        </DialogHeader>
        <Input placeholder="User  Name" defaultValue={user ? user.name : ''} />
        <Button onClick={onSave}>Save</Button>
      </DialogContent>
    </Dialog>
  );
};

export default UserDialog;