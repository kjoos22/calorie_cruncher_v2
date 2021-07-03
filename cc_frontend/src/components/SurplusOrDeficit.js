import React from 'react'

const SurplusOrDeficit = ({day}) => {
    return (
        <span style={day.tdee > 0 ? {color: 'red'} : {color: 'green'}}>
            {day.tdee > 0 ? "SURPLUS" : "DEFICIT"}<br/>
        </span>
    )
}

export default SurplusOrDeficit