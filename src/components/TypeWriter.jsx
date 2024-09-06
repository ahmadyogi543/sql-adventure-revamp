import React, { useState, useEffect } from "react";

const Typewriter = ({ setDone, text, delay, scrollToBottom }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    scrollToBottom();
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [currentIndex, delay, text]);

  return <p>{currentText}</p>;
};

export default Typewriter;
