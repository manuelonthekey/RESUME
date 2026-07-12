import React from 'react';
import ComicPanel from './ui/ComicPanel';

const OriginStory = () => {
  return (
    <section id="origin" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 className="comic-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Issue #001: The Beginning</h2>
      
      <div className="comic-page" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        
        <ComicPanel style={{ gridColumn: 'span 2' }}>
          <div style={{ background: 'var(--comic-yellow)', padding: '10px', display: 'inline-block', border: '3px solid black', fontFamily: 'var(--font-comic)', marginBottom: '15px', transform: 'rotate(-2deg)' }}>
            VIT Bhopal, September 2023...
          </div>
          <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>The Origin of a Coder</h3>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            It didn't start with a radioactive spider. It started with a curiosity for how things work on the web. 
            Currently pursuing my B.Tech in Computer Science and Engineering, I've spent my time diving deep into the multiverse of software engineering.
          </p>
          <div style={{ position: 'absolute', bottom: '20px', right: '20px', fontFamily: 'var(--font-handwritten)', color: 'var(--primary-red)', fontSize: '1.5rem', transform: 'rotate(-5deg)' }}>
            "Bitten by Java exceptions? Absolutely."
          </div>
        </ComicPanel>

        <ComicPanel dark>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--electric-cyan)', marginBottom: '10px' }}>The First Web Strand</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
            My first lines of code were like learning to shoot webs—messy at first, but soon I was swinging through 
            Python, JavaScript, and Java. Now, I specialize in full-stack development, weaving scalable applications and intelligent data processing systems.
          </p>
        </ComicPanel>

        <ComicPanel>
           <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>The Internship Arc</h3>
           <p style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
             During my time at Rigzz Technologies, I faced the ultimate trial: production environments. 
             Collaborating with cross-functional teams, I learned that saving the city (or servers) requires teamwork, rapid prototyping, and a strong bias for action.
           </p>
           <div className="speech-bubble" style={{ bottom: '10px', right: '-10px', fontSize: '1rem', padding: '10px', transform: 'rotate(10deg)' }}>
              "Deploying to prod!"
           </div>
        </ComicPanel>

        <ComicPanel style={{ gridColumn: 'span 2', background: 'var(--primary-red)', color: 'var(--off-white)' }}>
           <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>With Great Code...</h3>
           <p style={{ fontSize: '1.2rem', lineHeight: '1.6', fontFamily: 'var(--font-handwritten)' }}>
             "...comes great technical debt." 
           </p>
           <p style={{ fontSize: '1.1rem', marginTop: '10px' }}>
             Jokes aside, my ambition is to translate user pain points into solutions that create both business and customer value. I am eager to contribute to product-focused roles where leadership, collaboration, and empathy shape impactful products.
           </p>
        </ComicPanel>

      </div>
    </section>
  );
};

export default OriginStory;
