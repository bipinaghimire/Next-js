import { useSelector } from 'react-redux';


// export default function NoteList({notes,filter}) {
    export default function NoteList() {
    // const {state:{notes,filter}} = useContext(NoteContext);
    const notes = useSelector(state=> state.notes)
    const filter = useSelector(state=> state.filter)
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
