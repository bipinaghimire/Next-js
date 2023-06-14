"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import noteService from "../services/noteService";
import AddNote from "./AddNote";
import NoteFilter from "./NoteFilter";
import NoteList from "./NoteList";


export default function NoteApp() {
  const dispatch = useDispatch()
  // const state = useSelector(state => state.notes)
  //commented to use redux bata aako store
    // const [state,dispatch ] = useReducer(noteReducer, {
    //     notes: [],
    //     desc: "",
    //     filter: "",
    // })
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

  
  return (
    <div>
      {/* //commented to use reducer */}

    {/* <NoteContext.Provider 
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
    > */}
      {/* <NoteFilter filter={filter} setFilter={setFilter} /> */}
      
      <NoteFilter/>

      {/* <NoteList notes={notes} filter={filter} /> */}
      <NoteList />

      {/* <AddNote desc={desc} setDesc={setDesc} handleAdd={handleAdd} /> */}
      <AddNote/>

    {/* </NoteContext.Provider> */}
    </div>
  );
}



