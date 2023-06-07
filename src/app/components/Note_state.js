"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import NoteForm from "./FormNote";
import NotesView from "./Notes";

export default function NoteState() {
  const [isEdit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/notes").then((response) => {
      console.log(response);
      setNotes(response.data);
    });
  }, []);
  const filtered = toggle ? notes.filter((note) => note.important) : notes;

  const handleAdd = (e) => {
    e.preventDefault();

    const new_note = {
      title: e.target.title.value,
      content: e.target.content.value,
      important: e.target.important.checked,
    };
    axios.post("http://localhost:3002/notes", new_note).then((res) => {
      console.log(res);
      setNotes(notes.concat(res.data));
    });

    e.target.title.value = "";
    e.target.content.value = "";
    e.target.important.checked = false;
  };

  const handleUpdate = (e, noteId) => {
    e.preventDefault();

    const updatedNote = {
      id: noteId,
      title: document.getElementById("title").value,
      content: document.getElementById("content").value,
      important: document.getElementById("important").checked,
    };
    axios
      .put(`http://localhost:3002/notes/${noteId}`, updatedNote)
      .then((res) => {
        console.log(res);
        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note.id === updatedNote.id ? { ...note, ...updatedNote } : note
          )
        );
      });

    setEdit(false);
    setEditId(null);
    e.target.title.value = "";
    e.target.content.value = "";
    e.target.important.checked = false;
  };

  const onEdit = (note) => {
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    const importantCheckbox = document.getElementById("important");

    titleInput.value = note.title;
    contentInput.value = note.content;
    importantCheckbox.checked = note.important;

    setEdit(true);
    setEditId(note.id);
  };

  const onDelete = (noteId) => {
    axios.delete(`http://localhost:3002/notes/${noteId}`).then((res) => {
      console.log(res);
      setNotes(notes.filter((note) => note.id !== noteId));
    });
  };

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <NoteForm
        isEdit={isEdit}
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
        editId={editId}
      />
      <NotesView
        filtered={filtered}
        toggle={toggle}
        setToggle={setToggle}
        handleDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
}