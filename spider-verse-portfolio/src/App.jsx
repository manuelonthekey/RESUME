import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OriginStory from './components/OriginStory';
import InternshipArcs from './components/InternshipArcs';
import Superpowers from './components/Superpowers';
import Missions from './components/Missions';
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
        
        <QuoteCard quote="Anyone can write code. The hard part is owning the bugs." author="THE DEVELOPER VIGILANTE" />
        
        <OriginStory />
        
        <QuoteCard quote="My Spider-Sense? It usually activates five minutes before production crashes." author="THE DEVELOPER VIGILANTE" />
        
        <InternshipArcs />

        <QuoteCard quote="Heroes save cities. Developers save production." author="THE DEVELOPER VIGILANTE" />
        
        <Superpowers />

        <QuoteCard quote="The real villains aren't monsters. They're undocumented APIs." author="THE DEVELOPER VIGILANTE" />
        
        <Missions />
        
        <QuoteCard quote="Every deploy is a leap of faith." author="THE DEVELOPER VIGILANTE" />
        
        <Contact />

        <QuoteCard quote="With great power comes great responsibility." author="UNCLE BEN" />
      </main>
    </div>
  );
}

export default App;
