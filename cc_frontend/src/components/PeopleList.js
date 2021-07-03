import React from 'react'
import Person from './PersonShow'

//deconstructed props
const PeopleList = ({people}) => {
    return(
        <div>
            {people.map(p => <li key={p.id}>{p.name} - {p.age} - {p.gender}</li>
            )}
        </div>
    )
}

export default PeopleList