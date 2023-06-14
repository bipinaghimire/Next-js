import { useDispatch, useSelector } from 'react-redux';
import noteService from '../services/noteService';
export default function AddNote() {
  // const {state:{desc,notes}, dispatch} = useContext(NoteContext)

  const dispatch = useDispatch();
  const desc = useSelector(state=> state.desc);
  const notes = useSelector(state=> state.notes)

  const handleAdd = (evt) => {
    evt.preventDefault();
    if (desc.trim() !== "") {
      const newNote = {
        desc: desc,
        important: Math.random() < 0.5,
      };

      noteService
        .createNote(newNote)
        .then((data) => dispatch({
            type:"SET_NOTES",
            payload:notes.concat(data)
        }))
      dispatch({
          type:"SET_DESC",
          payload:""
      })
    }
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
                <input type='text' placeholder='add note ...'
                    value={desc}
                    onChange={(e) => dispatch({
                      type: "SET_DESC",
                      payload: e.target.value,
                    })}
                />
                <button>add</button>
            </form>
    </div>
  )
}

