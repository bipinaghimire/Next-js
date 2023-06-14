import NoteContext from "./NoteContext";

// export default function NoteList({notes,filter}) {
    export default function NoteList() {
    const {state:{notes,filter}} = useContext(NoteContext);
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
