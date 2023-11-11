import React, { useState, useEffect } from "react";
import FlashcardList from "./FlashcardList";
import "./app.css";
import axios from "axios";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)



  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  return (
    <div className="container">
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2 + 2?",
    answer: "4",
    options: [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    id: 2,
    question: "Question 2?",
    answer: "Answer 1",
    options: [
      "Answer 1",
      "Answer 2",
      "Answer 3",
      "Answer 4"
    ]
  }
]

export default App;
