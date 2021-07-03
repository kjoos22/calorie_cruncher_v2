export default function peopleReducer(state = {people: []}, action) {
    switch(action.type) {
        case 'FETCH_PEOPLE':
            return {people: action.payload}
        case 'CREATE_PERSON':
            return {...state, people: [...state.people, action.payload]}
        default:
            return state
    }
    
}