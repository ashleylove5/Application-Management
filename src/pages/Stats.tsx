import React from 'react';
import { PieChart, BarChart2, TrendingUp } from 'lucide-react';

function Stats() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Application Statistics</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Application Status</h2>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500">
            No data available
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Monthly Applications</h2>
            <BarChart2 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500">
            No data available
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Response Rate</h2>
            <TrendingUp className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500">
            No data available
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Application Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Average Response Time</p>
            <p className="text-2xl font-semibold text-gray-900">N/A</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Interview Success Rate</p>
            <p className="text-2xl font-semibold text-gray-900">N/A</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Offer Rate</p>
            <p className="text-2xl font-semibold text-gray-900">N/A</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Average Salary Offered</p>
            <p className="text-2xl font-semibold text-gray-900">N/A</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;