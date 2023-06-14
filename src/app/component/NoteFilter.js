
// function NoteFilter({filter, setFilter}) {
  
import { useDispatch, useSelector } from 'react-redux';

  function NoteFilter() {
      // const {state:{filter},dispatch} = useContext(NoteContext)
      const dispatch = useDispatch()
      const filter = useSelector(state=>
        state.filter
      )
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
