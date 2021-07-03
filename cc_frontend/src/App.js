import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import PeopleContainer from './containers/PeopleContainer'
import Navigation from './components/Navigation'
import Welcome from './components/Welcome'


class App extends React.Component {
  
  //remove
  componentDidMount() {
    
  }
  //end of remove
  
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Welcome}></Route>
        </Switch>
        <PeopleContainer/>
      </div>
    )
  }
}

export default connect()(App)