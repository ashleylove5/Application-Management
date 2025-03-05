import React from 'react';
import { Building2, Briefcase } from 'lucide-react';

function AddApplication() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Add New Application</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <form className="p-6 space-y-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <div className="mt-1 relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  className="pl-10 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter company name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Job Title</label>
              <div className="mt-1 relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  className="pl-10 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter job title"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Job Description</label>
              <div className="mt-1">
                <textarea
                  rows={4}
                  className="block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter job description"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select className="mt-1 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option value="applied">Applied</option>
                <option value="interview">Interview Scheduled</option>
                <option value="rejected">Rejected</option>
                <option value="offer">Offer Received</option>
                <option value="accepted">Accepted</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Interview Date</label>
              <input
                type="date"
                className="mt-1 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Salary Offer</label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                <input
                  type="number"
                  className="pl-7 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter salary amount"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddApplication;