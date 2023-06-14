
// function NoteFilter({filter, setFilter}) {

import NoteContext from "./NoteContext"

  function NoteFilter() {
      const {state:{filter},dispatch} = useContext(NoteContext)
  return (
    <div>
          <input type='text'
                placeholder='search notes ...'
                value={filter}
                onChange={(e) => dispatch({
                    type:"SET_FILTER",
                    payload:e.target.value
                })} />
    </div>
  )
}

export default NoteFilter
