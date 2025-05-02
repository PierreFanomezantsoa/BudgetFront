import React from 'react';
import Sidebar from './components/sidbar';  // Chemin vers ta Sidebar
import TopBar from './components/topBar';   // Chemin vers ta TopBar
import { Outlet } from 'react-router-dom'; // Outlet = endroit où les pages s'affichent

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="p-4">
          <Outlet /> {/* Ici se charge le contenu de chaque page */}
        </main>
      </div>
    </div>
  );
}

export default Layout;
