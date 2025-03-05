import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Building2, Briefcase as BriefcaseBusiness } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Applications from './pages/Applications';
import ApplicationDetail from './pages/ApplicationDetail';
import AddApplication from './pages/AddApplication';
import Stats from './pages/Stats';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/applications/:id" element={<ApplicationDetail />} />
            <Route path="/applications/new" element={<AddApplication />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;