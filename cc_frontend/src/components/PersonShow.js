import React from 'react'

const Person = (props) => {
    
    let person = props.people[props.match.params.id - 1]
    
    return (
        <li>
           {person ? person.name : null} - {person ? person.age : null}
            - {person ? person.gender : null}
        </li>
    )
}

export default Person

//