import React from 'react'
import {Link} from 'react-router-dom'

//deconstructed props
const PeopleList = ({people}) => {
    return(
        <div>
            {people.map(p => <li key={p.id}>
                <Link to={`/people/${p.id}`}>{p.name} - {p.age} - {p.gender}
                </Link>
            </li>
            )}
        </div>
    )
}

export default PeopleList