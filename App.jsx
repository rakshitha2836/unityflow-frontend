import React, { useState } from 'react';
import CitizenReport from './CitizenReport';
import NGODashboard from './NGODashboard';
import VolunteerPortal from './VolunteerPortal';

function App() {
  const [activeTab, setActiveTab] = useState('citizen');

  return (
    <div className="app-container">
      <nav className="top-nav">
        <button onClick={() => setActiveTab('citizen')} className={activeTab === 'citizen' ? 'active' : ''}>Citizen</button>
        <button onClick={() => setActiveTab('ngo')} className={activeTab === 'ngo' ? 'active' : ''}>NGO</button>
        <button onClick={() => setActiveTab('volunteer')} className={activeTab === 'volunteer' ? 'active' : ''}>Volunteer</button>
      </nav>

      <main className="content">
        {activeTab === 'citizen' && <CitizenReport />}
        {activeTab === 'ngo' && <NGODashboard />}
        {activeTab === 'volunteer' && <VolunteerPortal />}
      </main>
    </div>
  );
}
