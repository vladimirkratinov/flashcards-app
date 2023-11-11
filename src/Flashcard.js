import React, { useState } from "react";

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      //class of "card" for every card
      //class of "flip" if flip == true
      //handle dynamic classes with default React & JS
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map(option => {
            return <div className="flashcard-option">{option}</div>
          })}
        </div>
      </div>
      <div className="back">{flashcard.answer}</div>
    </div>
  );
}
