
const FormNote = ({ notes, handleDelete, handleEdit }) => {
    // const handleEdit = (id) => {
    //     const noteToUpdate = notes.find((n) => n.id === id);
    //     setDesc(noteToUpdate.desc);
    //     setTargetNote(noteToUpdate);
    //     setIsEdit(true);
    //   };
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          {note.desc}
          <button onClick={() => handleDelete(note.id)}>Delete</button>
          {/* <button onClick={() => handleEdit(note.id)}>Edit</button> */}
        </li>
      ))}
    </ul>
  );
};

export default FormNote;

// export default function NoteForm({ isEdit, handleAdd, handleUpdate, editId }) {
//   return (
//     <div ca>
//       <form onSubmit={!isEdit ? handleAdd : (e) => handleUpdate(e, editId)}>
//         <label htmlFor="title">Title</label>
//         <br />
//         <input type="text" id="title" name="title" />
//         <br />
//         <label htmlFor="content">Content</label>
//         <br />
//         <textarea id="content" name="content" />
//         <br />
//         <label htmlFor="important">Important</label>
//         <input type="checkbox" id="important" name="important" />
//         <br />
//         <button type="submit">{!isEdit ? "Add Note" : "Update"}</button>
//       </form>
//     </div>
//   );
// }
