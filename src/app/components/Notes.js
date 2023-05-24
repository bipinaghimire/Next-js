export default function Notes(props){
    const {notes} = props
    return(
        <div>
            <h1>Notes</h1>

            <ul>
                {notes.map((note)=>(
                    <li key={note.id}>{note.id} {note.desc}</li>
                ))}
            </ul>
        </div>
    )
}