import React, { useState } from "react";

function CreateArea(props) {
  let [noteObj, setNoteObj] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    let { name, value } = event.target;
    setNoteObj((prevNote) => {
      if (name == "title") {
        return { title: value, content: prevNote.content };
      } else if (name == "content") {
        return { title: prevNote.title, content: value };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={noteObj.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={noteObj.content}
        />
        <button
          onClick={(event) => {
            props.handleClick(noteObj.title, noteObj.content);
            setNoteObj({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
