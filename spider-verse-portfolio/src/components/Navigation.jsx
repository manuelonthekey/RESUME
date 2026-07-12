import React from 'react';
import { Network, Home, BookOpen, Zap, Target, GitMerge, Mail } from 'lucide-react';

const Navigation = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'var(--pitch-black)',
      borderBottom: '4px solid var(--primary-red)',
      padding: '10px 20px',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div className="spider-sense" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--off-white)', fontWeight: 'bold' }}>
        <Network color="var(--primary-red)" />
        <span style={{ fontFamily: 'var(--font-comic)', fontSize: '1.5rem', letterSpacing: '2px' }}>SPIDER-HUB</span>
      </div>
      
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '20px'
      }}>
        {['Home', 'Origin', 'Powers', 'Missions', 'Timeline', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="comic-btn" style={{ padding: '8px 16px', fontSize: '1rem' }}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
