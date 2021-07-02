import React from 'react'

class PersonCreate extends React.Component {
    
    state = {name: "", height: "", age: "", gender: ""}
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div>
                Enter New Person
                <form>
                    <label>Name: </label><br/>                    
                    <input type='text' placeholder='Name' name="name"
                        value={this.state.name} onChange={this.handleChange}/>
                    <br/>
                    <label>Height (inches): </label><br/>
                    <input type='number' placeholder='Height (inches)' name="height"
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
                </form>
            </div>
        )
    }
}

export default PersonCreate