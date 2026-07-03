import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidbar";
import MytopBar from "./components/topBar";

function App() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* TOPBAR */}
        <div className="sticky top-0 z-10">
          <MytopBar />
        </div>

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default App;