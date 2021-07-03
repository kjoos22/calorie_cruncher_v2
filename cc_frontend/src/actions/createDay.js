export const createDay = (formData, personId) => {
    
    return(dispatch) => {
        fetch(`http://localhost:3001/people/${personId}/days`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(response => dispatch({type: 'CREATE_DAY', payload: response}))
    }
}