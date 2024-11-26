// src/components/Roles/RoleDialog.js
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const RoleDialog = ({ open, onClose, role, onSave }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{role ? 'Edit Role' : 'Add Role'}</DialogTitle>
        </DialogHeader>
        <Input placeholder="Role Name" defaultValue={role ? role.name : ''} />
        <Button onClick={onSave}>Save</Button>
      </DialogContent>
    </Dialog>
  );
};

export default RoleDialog;