import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const posterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, {
      threshold: 0.2
    });

    if (posterRef.current) {
      observer.observe(posterRef.current);
    }

    return () => {
      if (posterRef.current) {
        observer.unobserve(posterRef.current);
      }
    };
  }, []);

  return (
    <section id="home" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '40px', position: 'relative' }}>
      
      {/* Global Section Heading */}
      <div style={{ textAlign: 'left', maxWidth: '1400px', margin: '0 auto 40px auto', padding: '0 20px' }}>
        <h1 className="comic-title" style={{ fontSize: '4rem', display: 'block' }}>MANOJIT MAITRA: THE FRIENDLY NEIGHBORHOOD DEVELOPER</h1>
        <h2 style={{ color: 'var(--comic-yellow)', marginTop: '10px', fontFamily: 'var(--font-comic)', fontSize: '2rem', textTransform: 'none', letterSpacing: '1px' }}>
          Building Apps, one line of code at a time.
        </h2>
      </div>

      <div ref={posterRef} className={`poster-container ${isVisible ? 'is-visible' : ''}`} id="poster">
        
        {/* Panel 1 (Top / Red) */}
        <div className="panel panel-1">
          <img src="/images/hero1.png" alt="Varsity Jacket Intro" className="hero-img-1" />
          <div className="bubble bubble-main delay-1">
            HI, I'M MANOJIT MAITRA.<br />
            FULL-STACK DEVELOPER BY DAY.<br />
            BUG HUNTER BY NIGHT.
            <div className="tail-left"></div>
          </div>
        </div>

        {/* Panel 2 (Yellow) */}
        <div className="panel panel-2">
          <img src="/images/hero2.png" alt="Thumbs up" className="hero-img-2" />
          <div className="bubble bubble-large delay-2">
            OH YEAH... <br />
            THESE ARE MY PROFILES
            <div className="tail-right"></div>
          </div>
          <div className="bubble-group-right">
            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="bubble bubble-small delay-3">
              <span className="icon" style={{ marginRight: '6px' }}>{"{ }"}</span> LEETCODE
              <div className="tail-right"></div>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bubble bubble-small delay-4">
              <span className="icon" style={{ marginRight: '6px' }}>💻</span> GITHUB
              <div className="tail-right"></div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bubble bubble-small delay-5">
              <span className="icon" style={{ marginRight: '6px' }}>in</span> LINKEDIN
              <div className="tail-right"></div>
            </a>
          </div>
        </div>

        {/* Panel 3 (Row 3 Left) */}
        <div className="panel panel-3">
          <img src="/images/panel3.jpeg" alt="Walking to engineering" className="panel-bg" />
          <div className="caption-box delay-6">
            A FINE DAY, PROJECTS WORKING, NO BUGS
          </div>
        </div>

        {/* Panel 4 (Row 3 Right) */}
        <div className="panel panel-4">
          <img src="/images/panel4.jpeg" alt="Intense stare" className="panel-bg" />
          <div className="caption-vertical delay-7">
            SUDDENLY
          </div>
        </div>

        {/* Panel 5 (Row 4 Left) */}
        <div className="panel panel-5">
          <img src="/images/panel5.jpg" alt="Putting on mask" className="panel-bg" />
        </div>

        {/* Panel 6 (Row 4 Right) */}
        <div className="panel panel-6">
          <img src="/images/panel6.jpg" alt="Coding" className="panel-bg" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
