import React from 'react';
import { Bell, UserRound } from 'lucide-react';

function MytopBar() {
  return (
    <div className="bg-white flex justify-end items-center px-6 py-4 shadow-md">
      <div className="flex items-center space-x-4">
        <Bell size={24} className="text-gray-800 cursor-pointer" />
        <UserRound size={24} className="text-gray-800 cursor-pointer" />
      </div>
    </div>
  );
}

export default MytopBar;
