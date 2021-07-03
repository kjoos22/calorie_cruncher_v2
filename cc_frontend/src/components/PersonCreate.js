import React from 'react'
import {connect} from 'react-redux'
import {createPerson} from '../actions/createPerson'

class PersonCreate extends React.Component {
    
    state = {name: "", inches: "", age: "", gender: ""}
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createPerson(this.state)
    }


    render() {
        return(
            <div>
                Enter New Person
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label><br/>                    
                    <input type='text' placeholder='Name' name="name"
                        value={this.state.name} onChange={this.handleChange}/>
                    <br/>
                    <label>Height (inches): </label><br/>
                    <input type='number' placeholder='Height (inches)' name="inches"
                        value={this.state.height} onChange={this.handleChange}/>
                    <br/>
                    <label>Age: </label><br/>
                    <input type='number' placeholder='Age' name="age"
                        value={this.state.age} onChange={this.handleChange}/>
                    <br/>
                    <label>Gender: </label><br/>
                    <select name="gender" value={this.state.gender} 
                        onChange={this.handleChange}>
                        <option value="" disabled selected>Select</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {createPerson})(PersonCreate)