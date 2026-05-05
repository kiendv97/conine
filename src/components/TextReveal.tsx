'use client';

import React from 'react';

interface TextRevealProps {
  text: string;
  delay?: number;
  className?: string;
  charDelay?: number;
  wordDelay?: number;
  mode?: 'char' | 'word';
}

const TextReveal = ({ 
  text, 
  delay = 0, 
  className = "", 
  charDelay = 0.02, // Fast character reveal
  wordDelay = 0.1, // Fast word reveal
  mode = 'char' 
}: TextRevealProps) => {
  if (mode === 'word') {
    return (
      <span className={`reveal-container ${className}`}>
        {text.split(' ').map((word, i) => (
          <span key={i} className="reveal-word-wrapper">
            <span 
              className="reveal-word" 
              style={{ animationDelay: `${delay + i * wordDelay}s` }}
            >
              {word}&nbsp;
            </span>
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={`reveal-container ${className}`}>
      {text.split('').map((char, i) => (
        <span 
          key={i} 
          className="reveal-char" 
          style={{ animationDelay: `${delay + i * charDelay}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default TextReveal;
