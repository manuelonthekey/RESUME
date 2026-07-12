import React from 'react';
import ComicPanel from './ComicPanel';

const QuoteCard = ({ quote, author = "PETER PARKER" }) => {
  return (
    <ComicPanel className="quote-card spider-sense" style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'center' }}>
      <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>"{quote}"</h3>
      <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.2rem', color: 'var(--primary-red)' }}>- {author}</p>
    </ComicPanel>
  );
};

export default QuoteCard;
