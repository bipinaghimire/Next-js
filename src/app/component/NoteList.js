import { useContext } from "react";
import NoteContext from "./NoteCOntext";

export default function NoteList() {
    const {notes,filter} = useContext(NoteContext);
  return (
    <div>
      <ul>
                {
                    notes.filter(note => note.desc.toLowerCase().includes(filter.toLowerCase())).
                        map(note => <li key={note.id}>{note.desc}</li>)
                
                        // <li key={note.id}>
                        //     {note.desc}
                        // </li>
                }
            </ul>
    </div>
  )
}
