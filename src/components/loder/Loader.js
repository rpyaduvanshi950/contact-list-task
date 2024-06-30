import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [text, setText] = useState('');
  const [letters, setLetters] = useState([]);
  const [animationDelay, setAnimationDelay] = useState(0);
  const [cursor, setCursor] = useState(false);
  const textToAnimate = 'Welcome';

  useEffect(() => {
    const lettersArray = textToAnimate.split('');
    setLetters(lettersArray);
  }, []);

  useEffect(() => {
    const animateText = () => {
      let delay = 0;
      letters.forEach((letter, index) => {
        setTimeout(() => {
          setText(text + letter);
          setAnimationDelay(delay);
          if (index === letters.length - 1) {
            setCursor(true);
          }
        }, delay);
        delay += 500; // adjust the delay between each letter
      });
    };
    animateText();
  }, [letters]);

  return (
    <div className="loader-container">
      <div className="loader-text">
        {text.split('').map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
        {cursor && <span className="cursor">|</span>}
      </div>
    </div>
  );
};

export default Loader;