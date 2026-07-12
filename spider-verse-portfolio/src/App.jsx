import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OriginStory from './components/OriginStory';
import Superpowers from './components/Superpowers';
import Missions from './components/Missions';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import QuoteCard from './components/ui/QuoteCard';

function App() {
  
  useEffect(() => {
    // Basic easter egg logic for "Green Goblin" broken links or spider sense
    const handleBrokenLinks = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
        e.preventDefault();
        alert("Looks like Green Goblin sabotaged this link!");
      }
    };
    document.addEventListener('click', handleBrokenLinks);
    return () => document.removeEventListener('click', handleBrokenLinks);
  }, []);

  return (
    <div className="spider-verse-app" style={{ position: 'relative' }}>
      <div className="halftone-bg"></div>
      
      <Navigation />
      
      <main>
        <Hero />
        
        <QuoteCard quote="Anyone can wear the mask. You can wear the mask." author="MILES MORALES" />
        
        <OriginStory />
        
        <QuoteCard quote="It's not about the suit; it's about what you do with it." author="TONY STARK" />
        
        <Superpowers />
        
        <Missions />
        
        <Timeline />
        
        <QuoteCard quote="With great power comes great responsibility." author="UNCLE BEN" />
        
        <Contact />
      </main>
    </div>
  );
}

export default App;
