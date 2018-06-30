import React from 'react';
import './App.css';
import Form from './components/Form';
import Recipe from './components/recipe';
import Tick from './components/time';

// import axios from 'axios';

const api_key = "779d0d0ae72ae6b909ecd55d813b65e0";

class App extends React.Component {
  state = {
    recipes: [],
    ok:new Date().toLocaleTimeString()
  }

  getFunction = async (e) => {
    e.preventDefault();
    const recipeName = e.target.searchtext.value;
    console.log(recipeName);
    const res = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${api_key}&q=${recipeName}&count=30`);
    const data1 = await res.json();

    this.setState({
      recipes: data1.recipes

    });


    console.log(this.state.recipes);

  }
  render() {
   setTimeout(()=>{
        this.setState({
          ok:Tick
        });
   },1000)

    return (
      <div className="App">
        <header className="App-header"><ul>
          <li>
            <h1 className="App-title"><a href="">Food2Fork ApI </a></h1>
            <div className="tick"><Tick/></div>

          </li>
          <li>
            <div className="ok"><a href="">About</a></div>
          </li>
        </ul>

        </header>

        <div className="body">
          {/* <div className="sidebar">

            
            {/* setInterval(Tick, 1000); */}
            
        {/* </div> */}
          <div className="middle">
            <Form getFunction={this.getFunction} />
            <Recipe data={this.state.recipes} />
            {/* <h2>It is {this.state.ok}</h2> */}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
