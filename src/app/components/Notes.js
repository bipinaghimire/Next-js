   {/* // add toggle value that shows in default all and and if clicked show important show only important = true values */}
   import { useState } from "react";

export default function Notes(props) {
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState(props.notes);
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    setDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      id: notes.length + 1,
      desc: desc,
      important: Math.random() < 0.5
    };
    setNotes([...notes, newNote]);
    setDesc("");
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete note ${id}?`)) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const filteredNotes = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleToggle}>
        {showAll ? "Show Important" : "Show All"}
      </button>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            {note.desc}
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={desc} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
