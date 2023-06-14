"use client";
import { useEffect, useReducer } from "react";
import noteService from "../services/noteService";
import NoteContext from "./NoteContext";
import NoteFilter from "./NoteFilter";
import NoteList from "./NoteList";

const noteReducer= (state, action)=>{
    switch (action.type) {
        case "SET_NOTES":
            //...satete=> spread operator==> puranai content lai copy garxa naya object ma
        return {
            ...state,
            notes: action.payload,
        };
        case "SET_DESC":
            return{
                ...state,
                desc:action.payload
            }
        case "SET_FILTER":
            return{
                ...state,
                filter:action.payload
            }
        // case "ADD_NOTE":
        // return [...state, action.payload];
        
        default:
            throw new Error('action not defined')
    }
}

export default function NoteApp() {
    const [state,dispatch ] = useReducer(noteReducer, {
        notes: [],
        desc: "",
        filter: "",
    })
    //commented for using reducers
//   const [notes, setNotes] = useState([]);
//   const [desc, setDesc] = useState("");
//   const [filter, setFilter] = useState("");

  useEffect(() => {
    noteService.getAllNotes().then(data => dispatch({
        type:"SET_NOTES",
        payload:data
    }));
  }, []);

  const handleAdd = (evt) => {
    evt.preventDefault();
    if (desc.trim() !== "") {
      const newNote = {
        desc: desc,
        important: Math.random() < 0.5,
      };

      noteService
        .createNote(newNote)
        .then((data) => setNotes(notes.concat(data)));
      setDesc("");
    }
  };

  return (
    <div>
    <NoteContext.Provider 
    value={{
        // notes,
        // setNotes,
        // desc,
        // setDesc,
        // filter,
        // setFilter,
        // handleAdd
        state,
        dispatch
    }}
    >
      {/* <NoteFilter filter={filter} setFilter={setFilter} /> */}
      
      <NoteFilter/>

      {/* <NoteList notes={notes} filter={filter} /> */}
      <NoteList />

      {/* <AddNote desc={desc} setDesc={setDesc} handleAdd={handleAdd} /> */}

    </NoteContext.Provider>
    </div>
  );
}
