// AdminDashboard.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserManagement from '../modules/admin/UserManagement';
import InventoryConfig from '../modules/admin/InventoryConfig';
import RequisitionApprovals from '../modules/admin/RequisitionApprovals';
import Reporting from '../modules/admin/Reporting';

function AdminDashboard() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null); 

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false);
  };


  const handleAddUserToDisplay = (userData) => {
    setSelectedContent(
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">User Details</h3>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Role:</strong> {userData.role}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50 flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1 text-center">
          <h2 className="text-3xl font-semibold text-blue-600">Admin Dashboard</h2>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          Log Out
        </button>
      </div>

      <div className="flex flex-1">
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-lg">
          <h3 className="text-lg text-center font-semibold mb-4">Options</h3>
          <ul className="space-y-4">
            <li>
              <UserManagement onAddUser={handleAddUserToDisplay} />
            </li>
            <li><InventoryConfig /></li>
            <li><RequisitionApprovals /></li>
            <li><Reporting /></li>
          </ul>
        </div>

 
        <div className="flex-1 flex items-center justify-center p-6 bg-white rounded-lg shadow-lg ml-4">
          {selectedContent || (
            <h3 className="text-2xl font-semibold text-gray-800">Selected Content</h3>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">Are you sure you want to log out?</h3>
            <div className="flex justify-between">
              <button
                onClick={handleConfirmLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
              >
                Yes
              </button>
              <button
                onClick={handleCancelLogout}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
