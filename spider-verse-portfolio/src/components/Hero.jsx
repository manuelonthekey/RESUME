import React, { useState } from 'react';
import ComicPanel from './ui/ComicPanel';

const Hero = () => {
  const [hoverText, setHoverText] = useState('');

  const playSound = (sound) => {
    setHoverText(sound);
    setTimeout(() => setHoverText(''), 1000);
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px', position: 'relative' }}>
      <div className="comic-page">
        <ComicPanel className="hero-panel" style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', background: 'var(--deep-blue)', color: 'var(--off-white)' }}>
          
          <div style={{ flex: 1, position: 'relative' }}>
            <h1 className="comic-title">MANOJIT MAITRA: THE FRIENDLY NEIGHBORHOOD DEVELOPER</h1>
            <h2 style={{ color: 'var(--comic-yellow)', marginTop: '20px', fontFamily: 'var(--font-tech)', fontSize: '1.5rem', textTransform: 'none' }}>
              Building the web, one line of code at a time.
            </h2>
            <p style={{ marginTop: '10px', fontSize: '1.2rem', fontFamily: 'var(--font-handwritten)' }}>
              "Full-Stack Developer by day. Bug Hunter by night."
            </p>

            <div style={{ marginTop: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="#missions" className="comic-btn" onMouseEnter={() => playSound('THWIP!')}>
                View Projects
              </a>
              <a href="#origin" className="comic-btn spider-sense" onMouseEnter={() => playSound('WHOOSH!')}>
                Enter the Spider-Verse
              </a>
              <a href="/ManojitMaitra_Resume_july26.pdf" target="_blank" className="comic-btn" onMouseEnter={() => playSound('CLICK!')}>
                Download Resume
              </a>
            </div>

            {hoverText && (
              <div className="speech-bubble" style={{ top: '-50px', left: '10%', transform: 'rotate(-10deg)', fontSize: '2rem', color: 'var(--primary-red)' }}>
                {hoverText}
              </div>
            )}
          </div>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
             {/* Using a placeholder for the avatar as requested */}
             <div style={{ position: 'relative' }}>
                <img 
                  src="https://placehold.co/500x500/111111/D62828?text=SPIDER+DEV" 
                  alt="Spider Dev Avatar" 
                  style={{ border: '6px solid var(--pitch-black)', boxShadow: '8px 8px 0px var(--comic-yellow)', width: '100%', maxWidth: '400px', transform: 'rotate(2deg)' }} 
                />
                <div className="speech-bubble" style={{ bottom: '-30px', right: '-20px', fontSize: '1rem', padding: '10px 15px', transform: 'rotate(5deg)' }}>
                  Hey there!
                </div>
             </div>
          </div>

        </ComicPanel>
      </div>
    </section>
  );
};

export default Hero;
