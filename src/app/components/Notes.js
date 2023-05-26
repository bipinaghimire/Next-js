import { useState } from "react";
export default function Notes(props){
    // const {notes} = props
    const [desc, setDesc] = useState("");

    //rerender page with updated values
    const[notes, setNotes] = useState(props.notes)

    const handleChange=(event)=> setDesc(event.target.value)
    const handleSubmit = (event) => {
        event.preventDefault();
        const newNote ={
            id: notes.length + 1,
            desc: desc,
            important: Math.random() <0.5
        }
        setNotes(notes.concat(newNote))
        setDesc('')
    }
    return(
        <div>
            <h1>Notes</h1>

            <ul>
                {notes.map((note)=>(
                    <li key={note.id}>{note.desc}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
        <input type="text"  value={desc} onChange={handleChange} />
        {}
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
        </div>
    )
}