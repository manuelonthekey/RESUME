import React from 'react';
import ComicPanel from './ui/ComicPanel';

const superpowersData = [
  { name: "Web Slinging", subtitle: "Frontend", tools: "HTML, CSS, JavaScript, TypeScript, React, Vite, Tailwind CSS", color: "var(--primary-red)" },
  { name: "Velocity Mode", subtitle: "Performance", tools: "Zustand, TanStack Query", color: "var(--electric-cyan)" },
  { name: "Gadget Engineering", subtitle: "Backend", tools: "Node.js, Express, Django, Prisma, PostgreSQL", color: "var(--glowing-green)" },
  { name: "Multiverse Traversal", subtitle: "AI & Integrations", tools: "OpenRouter LLM APIs, Fuzzball, Server-Sent Events", color: "var(--neon-purple)" },
  { name: "Spider-Sense", subtitle: "Product Skills", tools: "User Research, Problem Framing, Rapid Prototyping", color: "var(--comic-yellow)" },
  { name: "Stealth Mode", subtitle: "Tools", tools: "Git, GitHub, Claude Code, Netlify, Render", color: "var(--pitch-black)" }
];

const Superpowers = () => {
  return (
    <section id="powers" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 className="comic-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Superpowers & Gadgets</h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {superpowersData.map((power, idx) => (
          <ComicPanel key={idx} style={{ flex: '1 1 300px', maxWidth: '350px', borderTop: `8px solid ${power.color}` }}>
            <h3 style={{ fontSize: '1.8rem', color: power.color, textTransform: 'uppercase' }}>{power.name}</h3>
            <div style={{ background: 'var(--pitch-black)', color: 'var(--off-white)', padding: '5px 10px', display: 'inline-block', fontFamily: 'var(--font-tech)', fontSize: '0.9rem', marginBottom: '15px' }}>
              {power.subtitle}
            </div>
            <p style={{ fontFamily: 'var(--font-tech)', fontSize: '1.1rem', lineHeight: '1.5' }}>
              {power.tools}
            </p>
            {power.name === "Stealth Mode" && (
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontFamily: 'var(--font-handwritten)', color: 'var(--primary-red)' }}>
                *Debugging in the shadows*
              </div>
            )}
          </ComicPanel>
        ))}
      </div>
    </section>
  );
};

export default Superpowers;
