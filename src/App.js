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

    this.updateFish = this.updateFish.bind(this);
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFish = this.removeFish.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
  }

  UNSAFE_componentWillMount() {
    //this runs right before render
    this.ref = base.syncState(`MyStore/fishes`, {
      context: this,
      state: "fishes",
    });

    const localStorageRef = localStorage.getItem(
      `order-${this.props.match.params.storeId}`
    );

    if (localStorageRef) {
      //update our App COmponents order state
      this.setState({
        order: JSON.parse(localStorageRef),
      });
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      `order-${this.props.match.params.storeId}`,
      JSON.stringify(nextState.order)
    );
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

  updateFish(key, updatedFish) {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  }

  removeFish(key) {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
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

  removeFromOrder(key) {
    const order = { ...this.state.order };
    delete order[key];
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
          <Order
            fishes={this.state.fishes}
            order={this.state.order}
            params={this.props.params}
            removeFromOrder={this.removeFromOrder}
          />
        </div>
        <div className='components'>
          <Inventory
            addFish={this.addFish}
            loadSamples={this.loadSamples}
            fishes={this.state.fishes}
            updateFish={this.updateFish}
            removeFish={this.removeFish}
          />
        </div>
      </div>
    );
  }
}

export default App;
