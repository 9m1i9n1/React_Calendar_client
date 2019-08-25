import React, { Component } from 'react';
import CalendarNavContainer from './containers/CalendarNavContainer';
import CalendarListContainer from './containers/CalendarListContainer'

class App extends Component {
  render() {
    return (
      <div>
        <CalendarNavContainer />
        <CalendarListContainer />
      </div>
    );
  }
}

export default App;