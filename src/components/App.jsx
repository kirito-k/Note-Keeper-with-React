import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [notes, setNotes] = useState([]);

  function handleClick(title, content) {
    let newNote = {
      title,
      content
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }

  function handleDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((data, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleClick={handleClick} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            handleDelete={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
