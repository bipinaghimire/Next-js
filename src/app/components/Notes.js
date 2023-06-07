{
  /* // add toggle value that shows in default all and and if clicked show important show only important = true values */
}
import axios from "axios";
import { useEffect, useState } from "react";
import AddNote from "./AddNote";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const baseUrl = "http://localhost:4000/notes";

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  const handleEdit = (id) => {
    const noteToUpdate = notes.find((n) => n.id === id);
    setDesc(noteToUpdate.desc);
    setTargetNote(noteToUpdate);
    setIsEdit(true);
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete note ${id}?`)) {
      axios.delete(`${baseUrl}/${id}`).then((response) => {
        setNotes(notes.filter((note) => note.id !== id));
      });
    }
  };

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const filteredNotes = showAll
    ? notes
    : notes.filter((note) => note.important);

  const h2_Style = {
    fontSze: 20,
    color: "red",
    fontStyle: "italic",
  };

  return (
    <div>
      <div className="nav">
        {" "}
        <h1>Simple Todo App</h1>
      </div>
      <div className="nav-add">
        <AddNote notes={notes} setNotes={setNotes} />
        <button onClick={handleToggle} className="button">
          {showAll ? "Show Important" : "Show All"}
        </button>
      </div>

      {/* <h2 style={h2_Style}> its a beautiful day</h2> */}

      <table className="table">
        <thead>
          <tr >
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredNotes.map((note) => (
            <tr key={note.id}>
              <td>{note.desc}</td>
              <td>
                <button onClick={() => handleDelete(note.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 
         <FormNote 
           notes={filteredNotes}
           handleDelete={handleDelete}
            // handleEdit={handleEdit}
         
         /> */}
      {/* <AddNote notes={notes} setNotes={setNotes} /> */}
    </div>
  );
};

export default Notes;

//  export default function NotesView({
//   filtered,
//   toggle,
//   setToggle,
//   handleDelete,
//   onEdit,
// }) {
//   return (
//     <div>
//       <br />
//       <button onClick={() => setToggle(!toggle)}>
//         {" "}
//         {toggle ? "Show All" : "Show Important"}
//       </button>
//       <h1>Notes</h1>
//       <hr />
//       <br />
//       <ul>
//         {filtered.map((note) => (
//           <li key={note.id} className="note">
//             <h2 style={h2_style}>{note.title}</h2>
//             <p>{note.content}</p>
//             <p>{note.important ? "Important" : "Not Important"}</p>
//             <br />
//             <button onClick={() => handleDelete(note.id)}>Delete</button>{" "}
//             <button onClick={() => onEdit(note)}>Edit</button>
//             <br />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const h2_style = {
//   color: "red",
//   fontSize: 25,
//   fontWeight: "bold",
// };
