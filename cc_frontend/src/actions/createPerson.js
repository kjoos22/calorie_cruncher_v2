export const createPerson = (formData) => {
    
    return(dispatch) => {
        fetch('http://localhost:3001/people', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(response => dispatch({type: 'CREATE_PERSON', payload: response}))
    }
}