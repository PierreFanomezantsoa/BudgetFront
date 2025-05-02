import { Outlet } from 'react-router-dom';
import Mysidbar from "./components/sidbar";
import MytopBar from './components/topBar';

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-gray-300">
        <Mysidbar />
      </div>

      <div className="flex-1 flex flex-col">
        <MytopBar />
        <div className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
