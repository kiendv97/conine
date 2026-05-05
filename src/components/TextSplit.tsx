'use client';

import React, { useEffect, useRef, useState } from 'react';

interface TextSplitProps {
  text: string;
  delay?: number;
  className?: string;
  charDelay?: number;
  mode?: 'char' | 'word';
  trigger?: boolean;
}

const TextSplit = ({ 
  text, 
  delay = 0, 
  className = "", 
  charDelay = 0.02,
  mode = 'char',
  trigger = true
}: TextSplitProps) => {
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (trigger) {
      setHasTriggered(true);
    }
  }, [trigger]);

  const items = mode === 'word' ? text.split(' ') : text.split('');

  return (
    <span className={`text-split-container ${className}`} style={{ whiteSpace: 'pre-wrap' }}>
      {items.map((item, i) => (
        <span key={i} className="text-split-wrapper">
          <span 
            className={`text-split-item ${hasTriggered ? 'animate' : ''}`}
            style={{ 
              animationDelay: `${delay + i * charDelay}s`,
              display: 'inline-block'
            }}
          >
            {item}
          </span>
        </span>
      ))}
    </span>
  );
};

export default TextSplit;
