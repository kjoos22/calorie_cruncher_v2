import React from 'react'
import {Redirect} from 'react-dom'
import DaysContainer from '../containers/DaysContainer'

const Person = (props) => {
    
    let person = props.people[props.match.params.id - 1]
    
    return (
        <div>
            <h1>
                {person ? person.name : null} - {person ? person.age : null}
                - {person ? person.gender : null}
            </h1>
            <DaysContainer/>
        </div>
    )
}

export default Person

//