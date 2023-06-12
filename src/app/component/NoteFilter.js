import { useContext } from "react"
import NoteContext from "./NoteCOntext"

function NoteFilter() {
    const {filter,setFilter} = useContext(NoteContext)
  return (
    <div>
          <input type='text'
                placeholder='search notes ...'
                value={filter}
                onChange={(e) => setFilter(e.target.value)} />
    </div>
  )
}

export default NoteFilter
