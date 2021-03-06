import React from 'react'
import DayCreate from '../components/DayCreate'
import Days from '../components/DaysList'

class DaysContainer extends React.Component {
    render () {
        return (
            <div>
                <DayCreate person={this.props.person}/>
                <br/>
                <Days days={this.props.person && this.props.person.days}/>
            </div>
        )
    }


}

export default DaysContainer