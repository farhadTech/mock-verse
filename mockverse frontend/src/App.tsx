import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";

import Dashboard from "./pages/dashboard/Dashboard";
import PracticeTests from "./pages/dashboard/PracticeTests";
// import Analytics from "./pages/dashboard/Analytics";
import TestHistory from "./pages/dashboard/TestHistory";
import Resources from "./pages/dashboard/Resources";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";

import Navbar from "./components/layout/Navbar";
import DashboardLayout from "./components/layout/DashboardLayout";
import Analytics from "./pages/dashboard/Analytics";

function App () {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================================================== */ }
        {/* Public Website                                     */ }
        {/* ================================================== */ }

        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white text-slate-900">
              <Navbar />
              <Home />
            </div>
          }
        />

        {/* ================================================== */ }
        {/* Student Dashboard                                  */ }
        {/* ================================================== */ }

        <Route
          path="/dashboard"
          element={ <DashboardLayout /> }
        >
          {/* /dashboard */ }
          <Route
            index
            element={ <Dashboard /> }
          />

          {/* /dashboard/practice */ }
          <Route
            path="tests"
            element={ <PracticeTests /> }
          />

          {/* /dashboard/analytics */ }
          <Route
            path="analytics"
            element={ <Analytics /> }
          />

          {/* /dashboard/history */ }
          <Route
            path="history"
            element={ <TestHistory /> }
          />
          <Route
            path="resources"
            element={ <Resources /> }
          />
          {/* /dashboard/profile */ }
          <Route
            path="profile"
            element={<Profile />}
          />

          {/* /dashboard/settings */ }
          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;