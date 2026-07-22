import React from 'react';
import { Network, Home, BookOpen, Zap, Target, GitMerge, Mail } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="spider-sense" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--off-white)', fontWeight: 'bold' }}>
        <Network color="var(--primary-red)" />
        <span style={{ fontFamily: 'var(--font-comic)', fontSize: '1.5rem', letterSpacing: '2px' }}>MANOJIT-SENSE</span>
      </div>
      
      <ul className="nav-menu">
        {['Home', 'Origin', 'Powers', 'Missions', 'Timeline', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="comic-btn" style={{ padding: '8px 16px', fontSize: '1rem' }}>
              {item}
            </a>
          </li>
        ))}
        <li>
          <a href="https://raw.githubusercontent.com/manuelonthekey/RESUME/main/ManojitMaitra_Resume_july26.pdf" download="ManojitMaitra_resume" target="_blank" rel="noopener noreferrer" className="comic-btn" style={{ padding: '8px 16px', fontSize: '1rem', background: 'var(--primary-red)', color: 'var(--off-white)' }}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
