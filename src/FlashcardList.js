import React from "react";
import Flashcard from "./Flashcard";

export default function FlashcardList({ flashcards }) {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
        /* In React, when you render a list of components using the map 
        function, it's important to provide a unique key prop to each element. 
        The key prop helps React identify  which items have changed, are added,
        or are removed. 
        This is crucial for efficient updates and helps maintain component 
        state correctly. */
      })}
    </div>
  );
}
