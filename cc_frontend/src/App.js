import React from 'react'
import {connect} from 'react-redux'
import {fetchPeople} from './actions/fetchPeople'

class App extends React.Component {
  
  //remove
  componentDidMount() {
    
  }
  //end of remove
  
  render() {
    return (
      <div className="App">
        PLACEHOLDER
      </div>
    )
  }
}

export default connect()(App)