import React, { useState } from 'react';
import styles from './CitizenReport.module.css';

const SECTORS = [
  { id: 'health', label: 'Healthcare', icon: '🏥', color: '#ef4444' },
  { id: 'flood', label: 'Flood Relief', icon: '🌊', color: '#3b82f6' },
  { id: 'food', label: 'Food', icon: '🍲', color: '#f59e0b' },
  { id: 'edu', label: 'Education', icon: '📚', color: '#8b5cf6' },
  { id: 'safety', label: 'Women Safety', icon: '🛡️', color: '#ec4899' }
];

const CitizenReport = () => {
  const [formData, setFormData] = useState({ sector: '', urgency: 1, location: null });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setFormData(prev => ({ ...prev, location: { lat: pos.coords.latitude, lng: pos.coords.longitude } }));
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Logic: fetch(RENDER_URL + '/api/tasks', { method: 'POST', body: JSON.stringify(formData) })
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) return (
    <div className={styles.successScreen}>
      <div className={styles.checkIcon}>✓</div>
      <h2>Report Submitted Successfully</h2>
      <button onClick={() => setSubmitted(false)}>File Another Report</button>
    </div>
  );

  return (
    <div className={styles.container}>
      <h2>Citizen Report</h2>
      
      <div className={styles.sectorGrid}>
        {SECTORS.map(s => (
          <div 
            key={s.id} 
            className={`${styles.tile} ${formData.sector === s.id ? styles.activeTile : ''}`}
            onClick={() => setFormData({...formData, sector: s.id})}
            style={{ '--tile-color': s.color }}
          >
            <span className={styles.icon}>{s.icon}</span>
            <p>{s.label}</p>
          </div>
        ))}
      </div>

      <div className={styles.urgencyRow}>
        {[1, 2, 3, 4, 5].map(v => (
          <button 
            key={v}
            className={styles.urgencyBtn}
            style={{ backgroundColor: formData.urgency >= v ? `var(--u${formData.urgency})` : '#2d3748' }}
            onClick={() => setFormData({...formData, urgency: v})}
          >{v}</button>
        ))}
      </div>

      <button className={styles.locBtn} onClick={handleLocation}>
        {formData.location ? `📍 ${formData.location.lat.toFixed(2)}, ${formData.location.lng.toFixed(2)}` : 'Use My Location'}
      </button>

      <button className={styles.submitBtn} onClick={handleSubmit} disabled={loading}>
        {loading ? <div className={styles.spinner} /> : 'Submit'}
      </button>
    </div>
  );
};

export default CitizenReport;
