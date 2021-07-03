import React from 'react'
import SurplusOrDeficit from './SurplusOrDeficit'
import DaySummary from './DaySummary'


const Days = ({days}) => {
    return (
        <div>
            {days && days.map(d => 
                <ul key={d.id}>
                    <h2>{d.date}</h2>
                    
                    <DaySummary day={d}/>
                </ul>
            )}            
        </div>
    )
}

export default Days