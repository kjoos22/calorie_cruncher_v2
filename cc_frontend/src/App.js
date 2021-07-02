import React from 'react'
import {connect} from 'react-redux'
import PeopleContainer from './containers/peopleContainer'

class App extends React.Component {
  
  //remove
  componentDidMount() {
    
  }
  //end of remove
  
  render() {
    return (
      <div className="App">
        PLACEHOLDER
        <PeopleContainer/>
      </div>
    )
  }
}

export default connect()(App)