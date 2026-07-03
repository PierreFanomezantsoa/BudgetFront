import React from "react";
import { Bell, UserRound, Search } from "lucide-react";

function MytopBar() {
  return (
    <div className="bg-white flex items-center justify-between px-4 md:px-6 py-3 shadow-md">

      {/* SEARCH */}
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-xl w-1/3">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Rechercher..."
          className="bg-transparent ml-2 outline-none w-full text-sm"
        />
      </div>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-5 ml-auto">

        {/* NOTIFICATIONS */}
        <div className="relative cursor-pointer">
          <Bell size={22} className="text-gray-700 hover:text-teal-600 transition" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* USER */}
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-xl transition">
          <UserRound size={22} className="text-gray-700" />
          <span className="hidden md:block text-sm font-medium text-gray-700">
            Admin
          </span>
        </div>

      </div>

    </div>
  );
}

export default MytopBar;