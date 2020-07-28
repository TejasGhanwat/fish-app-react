import React, { Component } from "react";
import "./App.css";
import Fish from "./components/Fish";
import Header from "./components/header";
import Order from "./components/order";
import Inventory from "./components/inventory";
import SampleFishes from "./components/samplefishes.js";
import base from "./base";

class App extends Component {
  constructor() {
    super();

    this.state = {
      fishes: {},
      order: {},
    };
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.ref = base.syncState(`MyStore/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
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

  addToOrder(key) {
    //take copy of our state

    const order = { ...this.state.order };

    //update or add the number of fish ordered

    order[key] = order[key] + 1 || 1;
    //update our state
    this.setState({ order });
  }

  render() {
    return (
      <div className='App'>
        <div className='components'>
          {/* <Header /> */}
          <ul>
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <div className='components'>
          <Order fishes={this.state.fishes} order={this.state.order} />
        </div>
        <div className='components'>
          <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
        </div>
      </div>
    );
  }
}

export default App;
