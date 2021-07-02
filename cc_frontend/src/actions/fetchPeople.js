export function fetchPeople() {
    return (dispatch) => {
        fetch("http://localhost:3001/people/")
        .then(response => response.json())
        .then(response => dispatch({
            type: "FETCH_PEOPLE",
            payload: response
        }))
    }

}