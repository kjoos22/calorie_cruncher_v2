import React from 'react'
import {Route, Link} from 'react-router-dom'

const Days = ({days}) => {
    return (
        <div>
            {days.map(d => <li key={d.id}><Link to={`/days/${d.id}`}>{d.date} 
                </Link></li>
            )}            
        </div>
    )
}

export default Days