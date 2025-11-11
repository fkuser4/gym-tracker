import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Dashboard } from './pages/Dashboard';

// Placeholder pages - will create these later
const WorkoutsPage = () => <div className="page-header"><h1 className="page-title">Workouts</h1></div>;
const NutritionPage = () => <div className="page-header"><h1 className="page-title">Nutrition</h1></div>;
const ProgressPage = () => <div className="page-header"><h1 className="page-title">Progress</h1></div>;
const SocialPage = () => <div className="page-header"><h1 className="page-title">Social</h1></div>;
const ClientsPage = () => <div className="page-header"><h1 className="page-title">Clients</h1></div>;
const GymPage = () => <div className="page-header"><h1 className="page-title">Gym Management</h1></div>;
const SchedulePage = () => <div className="page-header"><h1 className="page-title">Schedule</h1></div>;
const MessagesPage = () => <div className="page-header"><h1 className="page-title">Messages</h1></div>;
const SettingsPage = () => <div className="page-header"><h1 className="page-title">Settings</h1></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="workouts" element={<WorkoutsPage />} />
          <Route path="nutrition" element={<NutritionPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="social" element={<SocialPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="gym" element={<GymPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
