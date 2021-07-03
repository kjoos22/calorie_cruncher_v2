import React from 'react'
import SurplusOrDeficit from './SurplusOrDeficit'
import DaySummary from './DaySummary'


const Days = ({days}) => {
    return (
        <div>
            {days && days.map(d => 
                <li key={d.id}>{d.date}<DaySummary day={d}/></li>
            )}            
        </div>
    )
}

export default Days