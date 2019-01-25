import React from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import './App.css';
import Scroll from '../Components/Scroll';

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
    const {robots, searchField} = this.state;
    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length? <h1>Loading</h1>: (
            <div className="tc">
              <h1 className="f1">RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
                <CardList robots={filterRobots} />
              </Scroll>
            </div>
        )
    }
}

export default App;
