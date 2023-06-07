import axios from "axios";
import { useState } from "react";

const AddNote = ({ notes, setNotes }) => {
  const [desc, setDesc] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [targetNote, setTargetNote] = useState(null);

  const baseUrl = "http://localhost:4000/notes";

  const handleChange = (event) => {
    setDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      desc: desc,
      important: Math.random() < 0.5,
    };
    axios.post(baseUrl, newNote).then((response) => {
      setNotes(notes.concat(response.data));
    });
    setDesc("");
  };

  const handleSave = (event) => {
    event.preventDefault();
    axios
      .put(`${baseUrl}/${targetNote.id}`, { ...targetNote, desc: desc })
      .then((response) => {
        setNotes(
          notes.map((n) => (n.id === targetNote.id ? response.data : n))
        );
      });
    setDesc("");
    setIsEdit(true);
  };

  return (
    <form>
      <input type="text" value={desc} onChange={handleChange} />
      {" "}
      {isEdit ? (
        <button className="button" onClick={handleSave}>Save</button>
      ) : (
        <button className="button" onClick={handleSubmit}>Add</button>
      )}
    </form>
  );
};

export default AddNote;
