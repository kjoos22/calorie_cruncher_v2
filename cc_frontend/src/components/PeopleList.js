import React from 'react'

//deconstructed props
const PeopleList = ({people}) => {
    return(
        <div>
            {people.map(p => 
                <li key={p.id}>{p.name} - {p.age} - {p.gender}</li>
             )}
        </div>
    )
}

export default PeopleList