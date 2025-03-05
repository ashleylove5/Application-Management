import React from 'react';
import { useParams } from 'react-router-dom';
import { Building2, Calendar, DollarSign, MessageSquare } from 'lucide-react';

function ApplicationDetail() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Application Details</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Edit Application
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Building2 className="h-12 w-12 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Loading...</h2>
              <p className="text-gray-500">Company Name</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center text-gray-500">
                <Calendar className="h-5 w-5 mr-2" />
                Application Date: Loading...
              </div>
              <div className="flex items-center text-gray-500">
                <Calendar className="h-5 w-5 mr-2" />
                Interview Date: Not scheduled
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-gray-500">
                <DollarSign className="h-5 w-5 mr-2" />
                Salary: Not specified
              </div>
              <div className="flex items-center text-gray-500">
                <MessageSquare className="h-5 w-5 mr-2" />
                Status: Loading...
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Job Description</h3>
            <p className="text-gray-600">Loading...</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Feedback</h3>
            <p className="text-gray-600">No feedback yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationDetail;