import React from 'react';

const OriginStory = () => {
  return (
    <section id="origin" style={{ padding: '60px 20px', maxWidth: '1400px', margin: '0 auto' }}>
      
      <div 
        className="comic-panel shape-broken" 
        style={{ 
          minHeight: '600px', 
          background: 'linear-gradient(135deg, var(--pitch-black) 40%, var(--deep-blue) 100%)',
          position: 'relative',
          padding: '40px',
          borderWidth: '8px'
        }}
      >
        <div style={{ position: 'absolute', top: '-25px', left: '20px', background: 'var(--off-white)', color: 'var(--pitch-black)', padding: '5px 15px', fontFamily: 'var(--font-comic)', fontSize: '1.5rem', border: '4px solid var(--pitch-black)', transform: 'rotate(-2deg)' }}>
          ISSUE #001 — THE ORIGIN OF A CODER
        </div>

        {/* Visual Background Placeholders */}
        <div style={{ position: 'absolute', top: '10%', right: '10%', opacity: 0.2, fontFamily: 'var(--font-tech)', fontSize: '2rem', color: 'var(--glowing-green)' }}>
          {`const hero = new Developer("Manojit");\nhero.init();\n// Debugging...`}
        </div>
        
        <div style={{ position: 'absolute', bottom: '20%', left: '5%', background: 'var(--comic-yellow)', padding: '20px', transform: 'rotate(-10deg)', border: '2px solid black', fontFamily: 'var(--font-handwritten)', color: 'black', boxShadow: '4px 4px 0 rgba(0,0,0,0.3)' }}>
          To-do:<br/>1. Survive University<br/>2. Build Web Apps<br/>3. Fix the 500 Error
        </div>

        {/* Center Visual Storytelling Placeholder */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-comic)', fontSize: '2rem' }}>
          [Cinematic Blend: Laptop Screens, Web Motifs, University Life]
        </div>

        {/* Narration Boxes */}
        <div className="narration-box" style={{ position: 'absolute', top: '15%', left: '10%', maxWidth: '300px' }}>
          "Every hero has an origin."
        </div>

        <div className="narration-box" style={{ position: 'absolute', top: '45%', right: '10%', maxWidth: '350px', background: 'var(--off-white)' }}>
          "Mine started with curiosity, code, and countless debugging sessions."
        </div>

        {/* Emphasis Text */}
        <div className="narration-box" style={{ 
          position: 'absolute', 
          bottom: '10%', 
          left: '50%', 
          transform: 'translateX(-50%) scale(1.1)', 
          background: 'var(--pitch-black)',
          color: 'var(--off-white)',
          textAlign: 'center',
          maxWidth: '600px',
          width: '90%',
          border: '6px solid var(--primary-red)'
        }}>
          <span className="comic-highlight" style={{ fontSize: '3rem', display: 'block', lineHeight: '1.2' }}>
            "With great code comes great technical debt."
          </span>
        </div>

      </div>

    </section>
  );
};

export default OriginStory;
