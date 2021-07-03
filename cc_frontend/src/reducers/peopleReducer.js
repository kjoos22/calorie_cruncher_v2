export default function peopleReducer(state = {people: []}, action) {
    switch(action.type) {
        case 'FETCH_PEOPLE':
            return {people: action.payload}
        case 'CREATE_PERSON':
            return {...state, people: [...state.people, action.payload]}
        case 'CREATE_DAY':
            return {...state, people: state.people.map(p => {
                if (p.id === action.payload.id) {
                    return action.payload
                } else {
                    return p
                }
                })
            }
        default:
            return state
    }
    
}