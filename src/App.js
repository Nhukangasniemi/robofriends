import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          robots: [],
          searchField: ''
      }
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
      .then(users => {
        this.setState({robots: users});
      })
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render() {
    const filterRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    if(this.state.robots.length === 0) {
        return <h1>Loading</h1>
    } else {
        return (
            <div className="tc">
              <h1 className="f1">RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <CardList robots={filterRobots} />
            </div>
        )
    }
  }
}

export default App;
