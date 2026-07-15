import React from 'react';
import ComicPanel from './ui/ComicPanel';

const arcs = [
  { label: "Arc 01 — Learning the ropes", title: "The Rigzz Initiation", text: "Joined Rigzz Technologies. The codebase was massive, the stakes were high. First mission: understand the system architecture.", color: "var(--electric-cyan)" },
  { label: "Arc 02 — Shipping features", title: "Client-Facing Deliverables", text: "Translated requirements into scalable solutions. Wrote code supporting live internal and client-facing systems. The rush of the first successful deployment!", color: "var(--glowing-green)" },
  { label: "Arc 03 — Surviving production", title: "The Live Environment", text: "Collaborated with cross-functional teams to keep the engines running. Realized that maintaining effective communication is a superpower on its own.", color: "var(--comic-yellow)" },
  { label: "Arc 04 — Debugging at 2 AM", title: "The Final Polish", text: "Late nights, caffeinated code reviews, and tracking down bugs before they hit prod. Demonstrated technical aptitude and took full ownership.", color: "var(--primary-red)" },
];

const InternshipArcs = () => {
  return (
    <section id="internship" style={{ padding: '60px 20px', maxWidth: '1400px', margin: '0 auto', overflow: 'hidden' }}>
      <h2 className="comic-title" style={{ textAlign: 'center', marginBottom: '20px' }}>ISSUE #002 — INTERNSHIP ARCS</h2>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '40px', color: 'var(--primary-red)', fontFamily: 'var(--font-handwritten)' }}>
        A Saga of Code, Coffee, and Cross-Functional Collaboration
      </p>

      {/* Horizontal Sequence Container */}
      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        overflowX: 'auto', 
        padding: '20px 10px',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch'
      }}>
        {arcs.map((arc, index) => (
          <div key={index} style={{ scrollSnapAlign: 'start', minWidth: '320px', flex: '0 0 auto' }}>
            <ComicPanel 
              dark={index % 2 !== 0} 
              className={index % 2 === 0 ? 'shape-slant' : 'shape-trapezoid-2'}
              style={{ height: '400px', display: 'flex', flexDirection: 'column', borderTop: `8px solid ${arc.color}` }}
            >
              <div style={{ background: 'var(--pitch-black)', color: 'var(--off-white)', padding: '5px 10px', fontFamily: 'var(--font-comic)', alignSelf: 'flex-start', transform: 'rotate(-3deg)' }}>
                {arc.label}
              </div>
              <h3 style={{ fontSize: '2rem', marginTop: '20px', color: arc.color }}>{arc.title}</h3>
              
              <div style={{ flex: 1, position: 'relative', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ opacity: 0.5, fontFamily: 'var(--font-comic)', fontSize: '1.2rem', textAlign: 'center' }}>
                   [Dossier / Visual Snapshot Placeholder]
                 </div>
              </div>

              <div className="narration-box" style={{ marginTop: 'auto', background: 'var(--off-white)', color: 'var(--pitch-black)' }}>
                {arc.text}
              </div>
            </ComicPanel>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternshipArcs;
