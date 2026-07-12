import React from 'react';

const ComicPanel = ({ children, className = '', dark = false }) => {
  return (
    <div className={`comic-panel ${dark ? 'dark' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default ComicPanel;
