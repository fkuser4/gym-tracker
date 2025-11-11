import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  Home,
  Dumbbell,
  Apple,
  TrendingUp,
  Users,
  Calendar,
  MessageSquare,
  Settings,
  Menu,
  X,
  Moon,
  Sun,
  Building2,
} from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

interface NavItem {
  name: string;
  icon: React.ReactNode;
  path: string;
  role?: string[]; // Which user roles can see this
}

const navigationItems: NavItem[] = [
  { name: 'Dashboard', icon: <Home className="w-5 h-5" />, path: '/' },
  { name: 'Workouts', icon: <Dumbbell className="w-5 h-5" />, path: '/workouts' },
  { name: 'Nutrition', icon: <Apple className="w-5 h-5" />, path: '/nutrition' },
  { name: 'Progress', icon: <TrendingUp className="w-5 h-5" />, path: '/progress' },
  { name: 'Social', icon: <Users className="w-5 h-5" />, path: '/social' },
  { name: 'Clients', icon: <Users className="w-5 h-5" />, path: '/clients', role: ['TRAINER'] },
  { name: 'Gym', icon: <Building2 className="w-5 h-5" />, path: '/gym', role: ['GYM_ADMIN'] },
  { name: 'Schedule', icon: <Calendar className="w-5 h-5" />, path: '/schedule' },
  { name: 'Messages', icon: <MessageSquare className="w-5 h-5" />, path: '/messages' },
];

export const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-card border-r border-border
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-20 flex items-center justify-between px-7 border-b border-border">
            <h1 className="text-xl font-bold text-foreground" style={{ letterSpacing: '-0.02em' }}>
              Gym<span className="text-primary">Tracker</span>
            </h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-5 py-8 space-y-2 overflow-y-auto">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Settings */}
          <div className="p-4 border-t border-border">
            <Link
              to="/settings"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="h-20 bg-card border-b border-border sticky top-0 z-30">
          <div className="h-full px-6 sm:px-8 lg:px-10 flex items-center justify-between">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-muted-foreground hover:text-foreground"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Search bar - placeholder */}
            <div className="hidden md:block flex-1 max-w-md mx-4">
              <input
                type="text"
                placeholder="Search..."
                className="input"
              />
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Notifications - placeholder */}
              <button className="p-2 rounded-xl hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>

              {/* User avatar - placeholder */}
              <button className="flex items-center gap-2 p-2 rounded-xl hover:bg-accent transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">JD</span>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6 sm:p-8 lg:p-10 max-w-[1400px] mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
