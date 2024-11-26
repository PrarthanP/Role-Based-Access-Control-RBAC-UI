// src/components/Dashboard/RBACDashboard.js
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
import { Switch } from '../ui/switch';
import { INITIAL_USERS, INITIAL_ROLES, AVAILABLE_PERMISSIONS } from '../../services/mockData';

const RBACDashboard = () => {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [roles, setRoles] = useState(INITIAL_ROLES);
  const [permissions] = useState(AVAILABLE_PERMISSIONS);

  const [selectedUser , setSelectedUser ] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
  const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // User management functions
  const handleAddUser  = () => {
    setSelectedUser (null);
    setIsUser: DialogOpen(true);
  };

  const handleEditUser  = (user) => {
    setSelectedUser (user);
    setIsUser: DialogOpen(true);
  };

  const handleDeleteUser  = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  // Role management functions
  const handleAddRole = () => {
    setSelectedRole(null);
    setIsRoleDialogOpen(true);
  };

  const handleEditRole = (role) => {
    setSelectedRole(role);
    setIsRoleDialogOpen(true);
  };

  const handleDeleteRole = (roleId) => {
    setRoles(roles.filter(role => role.id !== roleId));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">RBAC Dashboard</h1>
      
      <Tabs defaultValue="users" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="roles">Roles</TabsTrigger>
        </TabsList>

        {/* Users Tab */}
        <TabsContent value="users">
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search users..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button onClick={handleAddUser }>
              <Plus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                  <th className="px-4 py-3 text-left text-sm font -medium text-gray-500">Role</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())).map(user => (
                  <tr key={user.id}>
                    <td className="px-4 py-3">{user.name}</td>
                    <td className="px-4 py-3">{user.role}</td>
                    <td className="px-4 py-3">
                      <Button onClick={() => handleEditUser (user)}><Edit2 className="h-4 w-4" /></Button>
                      <Button onClick={() => handleDeleteUser (user.id)}><Trash2 className="h-4 w-4" /></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Roles Tab */}
        <TabsContent value="roles">
          <div className="flex justify-between items-center mb-4">
            <Button onClick={handleAddRole}>
              <Plus className="h-4 w-4 mr-2" />
              Add Role
            </Button>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Role Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {roles.map(role => (
                  <tr key={role.id}>
                    <td className="px-4 py-3">{role.name}</td>
                    <td className="px-4 py-3">
                      <Button onClick={() => handleEditRole(role)}><Edit2 className="h-4 w-4" /></Button>
                      <Button onClick={() => handleDeleteRole(role.id)}><Trash2 className="h-4 w-4" /></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>

      {/* User Dialog */}
      <Dialog open={isUserDialogOpen} onOpenChange={setIsUserDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedUser  ? 'Edit User' : 'Add User'}</DialogTitle>
          </DialogHeader>
          <Input placeholder="User  Name" value={selectedUser  ? selectedUser .name : ''} />
          <Button onClick={() => { /* Save user logic */ }}>Save</Button>
        </DialogContent>
      </Dialog>

      {/* Role Dialog */}
      <Dialog open={isRoleDialogOpen} onOpenChange={setIsRoleDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedRole ? 'Edit Role' : 'Add Role'}</DialogTitle>
          </DialogHeader>
          <Input placeholder="Role Name" value={selectedRole ? selectedRole.name : ''} />
          <Button onClick={() => { /* Save role logic */ }}>Save</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RBACDashboard;