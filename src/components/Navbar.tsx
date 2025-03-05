import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase as BriefcaseBusiness, LayoutDashboard, LineChart, PlusCircle } from 'lucide-react';

function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BriefcaseBusiness className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">JobTracker</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`flex items-center ${isActive('/')}`}>
              <LayoutDashboard className="h-5 w-5 mr-1" />
              Dashboard
            </Link>
            <Link to="/applications" className={`flex items-center ${isActive('/applications')}`}>
              <BriefcaseBusiness className="h-5 w-5 mr-1" />
              Applications
            </Link>
            <Link to="/stats" className={`flex items-center ${isActive('/stats')}`}>
              <LineChart className="h-5 w-5 mr-1" />
              Stats
            </Link>
          </div>

          <Link
            to="/applications/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
          >
            <PlusCircle className="h-5 w-5 mr-1" />
            Add Job
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;