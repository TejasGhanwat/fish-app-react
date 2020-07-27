import React, { Component } from "react";
import AddFishForm from "./addFishForm";

class Inventory extends Component {
  render() {
    return (
      <div>
        Inventory
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
