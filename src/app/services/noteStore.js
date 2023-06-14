const { legacy_createStore } = require("redux");

const noteReducer= (state={
    notes: [],
    desc: "",
    filter: "",
}, action)=>{
    switch (action.type) {
        case "SET_NOTES":
            //...state=> spread operator==> puranai content lai copy garxa naya object ma
        return {
            ...state,
            notes: action.payload,
        };
        case "SET_DESC":
            return{
                ...state,
                desc:action.payload
            }
        case "ADD_NOTE":
            return{
                ...state,
                notes:state.notes.concat(action.payload)
            }
        case "SET_FILTER":
            return{
                ...state,
                filter:action.payload
            }
        
        default:
            return state
    }
}

const noteStore = legacy_createStore(noteReducer)

export default noteStore;
