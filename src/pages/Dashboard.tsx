import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Clock, CheckCircle2, XCircle } from 'lucide-react';

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <Link
          to="/applications/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Application
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <Briefcase className="h-10 w-10 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Applications</p>
              <p className="text-2xl font-semibold text-gray-900">0</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <Clock className="h-10 w-10 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Pending Response</p>
              <p className="text-2xl font-semibold text-gray-900">0</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Interviews</p>
              <p className="text-2xl font-semibold text-gray-900">0</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <XCircle className="h-10 w-10 text-red-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Rejected</p>
              <p className="text-2xl font-semibold text-gray-900">0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
        </div>
        <div className="border-t border-gray-100">
          <div className="p-6 text-center text-gray-500">
            No applications yet. Start by adding your first job application!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;