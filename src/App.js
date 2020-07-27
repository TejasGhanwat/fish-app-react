import React, { Component } from "react";
import "./App.css";
import Fish from "./components/Fish";
import Header from "./components/header";
import Order from "./components/order";
import Inventory from "./components/inventory";
import SampleFishes from "./components/samplefishes.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      fishes: {},
      order: {},
    };
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
  }

  addFish(fish) {
    //update state
    //fishes is basically prevState
    const fishes = { ...this.state.fishes };
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //we'll add in our new fish
    //set State

    this.setState({
      fishes: fishes,
    });
  }

  loadSamples() {
    this.setState({
      fishes: SampleFishes,
    });
  }

  render() {
    return (
      <div className='App'>
        <div classname='components'>
          <Header />
          <ul>
            {Object.keys(this.state.fishes).map((key) => (
              <Fish key={key} details={this.state.fishes[key]} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    );
  }
}

export default App;
