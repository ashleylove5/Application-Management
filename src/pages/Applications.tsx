import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';

function Applications() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Job Applications</h1>
        <Link
          to="/applications/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Application
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search applications..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="h-5 w-5 mr-2" />
              Filter
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="text-center text-gray-500">
            No applications found. Start by adding your first job application!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applications;