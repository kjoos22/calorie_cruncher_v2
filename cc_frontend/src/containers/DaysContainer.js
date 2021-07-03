import React from 'react'
import DayCreate from '../components/DayCreate'
import Days from '../components/DaysList'

class DaysContainer extends React.Component {
    render () {
        return (
            <div>
                DAYS CONTAINER TEST
                <DayCreate/>
                <Days days={this.props.person && this.props.person.days}/>
            </div>
        )
    }


}

export default DaysContainer