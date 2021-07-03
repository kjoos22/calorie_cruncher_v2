import React from 'react'
import {connect} from 'react-redux'
import {createDay} from '../actions/createDay'

class DayCreate extends React.Component {
    
    state = {date: "", pounds: "", calories_consumed: ""}    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createDay(this.state, this.props.person.id)
        this.setState({date: "", pounds: "", calories_consumed: ""})
    }

    render() {
        return(
            <div>
                Enter New Day
                <form onSubmit={this.handleSubmit}>
                    <label>Date:</label><br/>
                    <input type='date' name="date" value={this.state.date}
                        onChange={this.handleChange}/>
                    <br/>
                    <label>Weight (pounds):</label><br/>
                    <input type='number' placeholder='Weight (pounds)' 
                        name='pounds' value={this.state.pounds} 
                        onChange={this.handleChange}/>
                    <br/>
                    <label>Calories Consumed:</label><br/>
                    <input type='number' placeholder='Calories Consumed' 
                        name='calories_consumed' 
                        value={this.state.calories_consumed} 
                        onChange={this.handleChange}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {createDay})(DayCreate)