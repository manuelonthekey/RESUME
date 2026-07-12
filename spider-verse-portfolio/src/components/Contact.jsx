import React, { useState } from 'react';
import ComicPanel from './ui/ComicPanel';
import { Mail, User, Code, FileText } from 'lucide-react';

const Contact = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2 className="comic-title" style={{ marginBottom: '20px' }}>Signal the Hero</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>Need a developer for your next mission? Send a signal.</p>

      <ComicPanel dark style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', background: 'var(--pitch-black)', borderColor: 'var(--primary-red)' }}>
        
        {/* Hologram beacon animation could go here, for now a pulsing icon */}
        <div className="spider-sense" style={{ 
          width: '100px', 
          height: '100px', 
          borderRadius: '50%', 
          background: 'var(--primary-red)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginBottom: '20px',
          cursor: 'pointer'
        }} onClick={handleClick}>
          <Mail size={40} color="var(--off-white)" />
        </div>

        {clicked && (
          <div className="speech-bubble" style={{ top: '40px', fontSize: '1.2rem', color: 'var(--pitch-black)' }}>
            Signal sent! Or you can just email me directly below.
          </div>
        )}

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="mailto:manojit.education2021@gmail.com" className="comic-btn">
            <Mail size={20} /> Email Me
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="comic-btn">
            <User size={20} /> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="comic-btn">
            <Code size={20} /> GitHub
          </a>
          <a href="/ManojitMaitra_Resume_july26.pdf" target="_blank" className="comic-btn">
            <FileText size={20} /> Resume
          </a>
        </div>
      </ComicPanel>

      <footer style={{ marginTop: '60px', fontFamily: 'var(--font-handwritten)', color: 'var(--primary-red)', fontSize: '1.2rem' }}>
        Designed with great power and great responsibility by Manojit Maitra © 2026
      </footer>
    </section>
  );
};

export default Contact;
