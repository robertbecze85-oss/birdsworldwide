import React, { useState } from 'react';
import BirdMap from './components/BirdMap';
import BirdDetail from './components/BirdDetail';
import './App.css';

function App() {
  const [selectedBird, setSelectedBird] = useState(null);

  return (
    <div className="App" style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Header / Overlay */}
      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1000,
        pointerEvents: 'none' // Let clicks pass through to map
      }}>
        <div className="glass-panel" style={{
          padding: '15px 25px',
          pointerEvents: 'auto', // Re-enable clicks for the header content
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <h1 style={{ margin: 0, fontSize: '24px', background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            BirdWatcher 2026
          </h1>
          <span style={{ fontSize: '12px', color: '#94a3b8', borderLeft: '1px solid #ffffff20', paddingLeft: '15px' }}>
            Global Ornithology Database
          </span>
        </div>
      </div>

      <BirdMap onSelectBird={setSelectedBird} />

      <BirdDetail
        bird={selectedBird}
        onClose={() => setSelectedBird(null)}
      />
    </div>
  );
}

export default App;
