import React from 'react'
import {Redirect} from 'react-dom'
import DaysContainer from '../containers/DaysContainer'

const Person = (props) => {
    
    let person = props.people.filter(person =>
        person.id == props.match.params.id)[0]
    
    return (
        <div>
            <h1>
                {person ? person.name : null} - {person ? person.age : null}
                - {person ? person.gender : null}
            </h1>
            <DaysContainer person={person}/>
        </div>
    )
}

export default Person

//