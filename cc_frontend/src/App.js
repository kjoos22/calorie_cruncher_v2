import React from 'react'
import {connect} from 'react-redux'
import PeopleContainer from './containers/PeopleContainer'

class App extends React.Component {
  
  //remove
  componentDidMount() {
    
  }
  //end of remove
  
  render() {
    return (
      <div className="App">
        Calorie Cruncher
        <br/>
        <br/>
        <PeopleContainer/>
      </div>
    )
  }
}

export default connect()(App)