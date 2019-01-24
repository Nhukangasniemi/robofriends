import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          robots: robots,
          searchField: ''
      }
  }

  onSearchChange = (event) => {
    //   console.log(event.target.value);
    this.setState({searchField: event.target.value});
  }

  render() {
    const filterRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList robots={filterRobots} />
    </div>
    )
  }
}

export default App;
