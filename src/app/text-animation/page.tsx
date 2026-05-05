'use client';

import React from 'react';
import './styles.css';

const TextAnimationPage = () => {
  const keywords = ['Design', 'Branding', 'Marketing'];

  const splitText = (text: string, baseDelay: number) => {
    return text.split('').map((char, i) => (
      <span 
        key={i} 
        className="char" 
        style={{ animationDelay: `${baseDelay + i * 0.05}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className="animation-container">
      <div className="bg-noise" />
      <div className="gradient-bg" />
      
      <div className="content-wrapper">
        <h1 className="hero-title">
          {keywords.map((word, index) => (
            <div key={word} className="word-row">
              {splitText(word, index * 0.4)}
            </div>
          ))}
        </h1>

        <p className="description">
          {splitText("ALIVE is a digital design studio, based in Japan and Vietnam. Finding creative solutions for businesses using design & technology is what we do.", 1.5)}
        </p>
      </div>
    </div>
  );
};

export default TextAnimationPage;
