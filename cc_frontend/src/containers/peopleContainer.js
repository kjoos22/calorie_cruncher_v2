import React from 'react'
import {connect} from 'react-redux'
import {fetchPeople} from '../actions/fetchPeople'
import {Route, Switch} from 'react-router-dom'
import PeopleList from '../components/PeopleList'
import Person from '../components/PersonShow'
import PersonCreate from '../components/PersonCreate'

class PeopleContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchPeople()
    }
    
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/people/new' component={PersonCreate}/>
                    <Route path='/people/:id' render={(routerProps) => 
                        <Person {...routerProps} people={this.props.people}/>
                    }/>
                    <Route path='/people' render={(routerProps) => 
                        <PeopleList {...routerProps} people={this.props.people}/>
                    }/>
                </Switch>                
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