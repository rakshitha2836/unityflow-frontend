import React, { useState } from 'react';
import styles from './NGODashboard.module.css';

const NGODashboard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.dashboard}>
      <div className={styles.taskCard}>
        <div className={styles.cardHeader}>
          <span>🏥 Healthcare</span>
          <span className={styles.status}>Pending</span>
        </div>
        <p>Emergency medical supply request in Sector 4.</p>
        <div className={styles.matchScore}>
          <label>Match Quality</label>
          <div className={styles.progressBase}>
            <div className={styles.progressFill} style={{ width: '85%' }} />
          </div>
        </div>
        <button onClick={() => setShowModal(true)}>Find Volunteer</button>
      </div>

      {showModal && (
        <div className={styles.overlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <h3>Available Volunteers</h3>
            {/* List items here */}
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
