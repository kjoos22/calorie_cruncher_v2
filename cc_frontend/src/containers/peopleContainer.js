import React from 'react'
import {connect} from 'react-redux'
import {fetchPeople} from '../actions/fetchPeople'
import PeopleList from '../components/PeopleList'
import PersonCreate from '../components/PersonCreate'

class PeopleContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchPeople()
    }
    
    render() {
        return (
            <div>
                <PersonCreate/>
                <PeopleList people={this.props.people}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        people: state.people
    }
}

export default connect(mapStateToProps, {fetchPeople})(PeopleContainer)