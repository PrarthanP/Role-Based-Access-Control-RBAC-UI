// Mock data
const INITIAL_USERS = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Editor',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Bob Wilson',
      email: 'bob@example.com',
      role: 'Viewer',
      status: 'Inactive'
    }
  ];
  
  const INITIAL_ROLES = [
    {
      id: 1, 
      name: 'Admin',
      permissions: ['create_user', 'edit_user', 'delete_user', 'manage_roles'],
      description: 'Full system access'
    },
    {
      id: 2,
      name: 'Editor',
      permissions: ['create_user', 'edit_user'],
      description: 'Can create and edit content'
    },
    {
      id: 3,
      name: 'Viewer',
      permissions: ['view_content'],
      description: 'Read-only access'
    }
  ];
  
  const AVAILABLE_PERMISSIONS = [
    'create_user',
    'edit_user',
    'delete_user',
    'manage_roles',
    'view_content'
  ];
  
  import React, { useState } from 'react';
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
  import { Button } from '@/components/ui/button';
  import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
  import { Input } from '@/components/ui/input';
  import { Badge } from '@/components/ui/badge';
  import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
  import { Switch } from '@/components/ui/switch';
  
  const RBACDashboard = () => {
    const [users, setUsers] = useState(INITIAL_USERS);
    const [roles, setRoles] = useState(INITIAL_ROLES);
    const [permissions] = useState(AVAILABLE_PERMISSIONS);
  
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedRole, setSelectedRole] = useState(null);
    const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
    const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  
    // User management functions
    const handleAddUser = () => {
      setSelectedUser(null);
      setIsUserDialogOpen(true);
    };
  
    const handleEditUser = (user) => {
      setSelectedUser(user);
      setIsUserDialogOpen(true);
    };
  
    const handleDeleteUser = (userId) => {
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
              <Button onClick={handleAddUser}>
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>
  
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Role</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.filter(user => 
                    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchTerm.toLowerCase())
                  ).map(user => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm">{user.name}</td>
                      <td className="px-4 py-3 text-sm">{user.email}</td>
                      <td className="px-4 py-3 text-sm">
                        <Badge variant="secondary">{user.role}</Badge>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <Badge 
                          variant={user.status === 'Active' ? 'success' : 'destructive'}
                        >
                          {user.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleEditUser(user)}
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
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
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search roles..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
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
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Description</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Permissions</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {roles.filter(role =>
                    role.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ).map(role => (
                    <tr key={role.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium">{role.name}</td>
                      <td className="px-4 py-3 text-sm">{role.description}</td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex flex-wrap gap-1">
                          {role.permissions.map(permission => (
                            <Badge key={permission} variant="outline">
                              {permission}
                            </Badge>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleEditRole(role)}
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleDeleteRole(role.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
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
              <DialogTitle>
                {selectedUser ? 'Edit User' : 'Add User'}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input 
                  placeholder="Enter name"
                  defaultValue={selectedUser?.name}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email"
                  placeholder="Enter email"
                  defaultValue={selectedUser?.email}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Role</label>
                <select className="w-full rounded-md border p-2">
                  {roles.map(role => (
                    <option 
                      key={role.id} 
                      selected={selectedUser?.role === role.name}
                    >
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch defaultChecked={selectedUser?.status === 'Active'} />
                <label>Active</label>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsUserDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsUserDialogOpen(false)}>
                  {selectedUser ? 'Update' : 'Create'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
  
        {/* Role Dialog */}
        <Dialog open={isRoleDialogOpen} onOpenChange={setIsRoleDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {selectedRole ? 'Edit Role' : 'Add Role'}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Role Name</label>
                <Input 
                  placeholder="Enter role name"
                  defaultValue={selectedRole?.name}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Input 
                  placeholder="Enter description"
                  defaultValue={selectedRole?.description}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Permissions</label>
                <div className="space-y-2 mt-2">
                  {permissions.map(permission => (
                    <div key={permission} className="flex items-center space-x-2">
                      <Switch 
                        defaultChecked={selectedRole?.permissions.includes(permission)}
                      />
                      <label>{permission}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsRoleDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsRoleDialogOpen(false)}>
                  {selectedRole ? 'Update' : 'Create'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  };
  
  export default RBACDashboard;