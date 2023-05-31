   {/* // add toggle value that shows in default all and and if clicked show important show only important = true values */}
   import { useState } from "react";

export default function Notes(props) {
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState(props.notes);
  const [showAll, setShowAll] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [targetNote, setTargetNote]= useState()

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

  const handleEdit=(id)=>{
    const noteToUpdate = notes.find(n=>n.id === id)
    setDesc(
      noteToUpdate.desc
    )
    setTargetNote(noteToUpdate)
    setIsEdit(true)
}

 const handleSave=(event)=>{
  event.preventDefault()
  setNotes(notes.map(n=> n.id === targetNote.id ? {...targetNote,desc:desc} : n))

  setDesc("")
  setIsEdit(true)
 }

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
            <button onClick={() => handleEdit(note.id)}>Edit</button>
          </li>
        ))}
      </ul>
      <form>
                <input
                    type="text"
                    value={desc}
                    onChange={handleChange} />
                {' '}
                {
                    isEdit
                        ? <button onClick={handleSave}>save</button>
                        : <button onClick={handleSubmit}>add</button>
                }

            </form>
    </div>
  );
}
