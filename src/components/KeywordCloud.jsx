// KeywordCloud.js
import React from 'react';
import { TagCloud } from 'react-tagcloud';
import './KeywordCloud.css';

const data = [
  { value: 'DevOps', count: 21 },
  { value: 'Performance Tuning', count: 20 },
  { value: 'Kernel debugging', count: 20 },
  { value: 'Product development', count: 20 },
  { value: 'Cloud computing', count: 20 },
  { value: 'Linux', count: 22 },
  { value: 'Architecture', count: 20 },
  { value: 'Red Hat', count: 21 },
  { value: 'Google Cloud', count: 21 },
];

const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinker 2s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size}px`,
      border: `1px solid ${color}`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: 'black',
    }}
  >
    {tag.value}
  </span>
);

const KeywordCloud = () => {
  return (
    <TagCloud
      minSize={15}
      maxSize={20}
      tags={data}
      renderer={customRenderer}
      randomSeed={42} // This can be removed or set to another value for different randomness
      className="simple-cloud"
    />
  );
};

export default KeywordCloud;
