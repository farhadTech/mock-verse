import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashboard";

import Navbar from "./components/layout/Navbar";
import DashboardLayout from "./components/layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================================================ */}
        {/* Public Website                                   */}
        {/* ================================================ */}

        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white text-slate-900">
              <Navbar />
              <Home />
            </div>
          }
        />

        {/* ================================================ */}
        {/* Student Dashboard                                */}
        {/* ================================================ */}

        <Route
          path="/dashboard"
          element={<DashboardLayout />}
        >
          <Route
            index
            element={<Dashboard />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
