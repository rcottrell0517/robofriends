import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import { robots } from './robots';





// state can change the app. props can not
// App component has two states which are robots and searchfield
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        //console.log('1 constructor');// Order things are happening
    }
    // Putting this code on one line below.
    //componentDidMount() {
        //fetch('https://jsonplaceholder.typicode.com/users')
        //.then(response=> {
            //return response.json();
        //})
        //.then(users => {
            //this.setState({ robots: users})
        //})
        //console.log('check');
        //this.setState({ robots: robots});
        //console.log('2 componentDidMount');// Order things are happening
    //}

    // fetch is a window's object
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        // If I remove "this.setState({ robots: users}) loading in what is displayed on the page."
        .then(users => {this.setState({ robots: users})});// Will get the robots when this.setState updates
        //console.log('check');
        //this.setState({ robots: robots});
        //console.log('2 componentDidMount');// Order things are happening
    }

    

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        //console.log(event.target.value);

        // Moved to the render function
        //const filteredRobots = this.state.robots.filter(robot =>{
            //return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        //})
        //console.log(filteredRobots);
    }

    // if loading the page took 5 seconds or more use an if statement
    render() {
          const { robots, searchfield } = this.state;
          const filteredRobots = robots.filter(robot =>{
           return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
         <h1>Loading</h1> :
        
        //console.log('3 render');// Order things are happening
        (
            <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll> 
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
        );
        }
    } 
        



export default App;