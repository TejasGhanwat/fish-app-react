import React, { Component } from "react";
import AddFishForm from "./addFishForm";
import fishes from "./samplefishes";

class Inventory extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.renderInventory = this.renderInventory.bind(this);
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    //take a copy of that fish and update it with the new data
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value,
    };

    this.props.updateFish(key, updatedFish);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className='inventory' key={key}>
        <p>{key}</p>
        <input
          type='text'
          value={fish.name}
          name='name'
          placeholder='Fish Name'
          onChange={(e) => this.handleChange(e, key)}
        />
        <br />
        <input
          type='text'
          value={fish.price}
          name='price'
          placeholder='Fish Price'
          onChange={(e) => this.handleChange(e, key)}
        />
        <br />
        <select
          value={fish.status}
          name='status'
          onChange={(e) => this.handleChange(e, key)}
        >
          <option value='available'>Fresh!</option>
          <option valule='unavailable'>Sold out!</option>
        </select>
        <br />
        <textarea
          onChange={(e) => this.handleChange(e, key)}
          name='desc'
          value={fish.desc}
          placeholder='Fish Description'
        ></textarea>
        <br />
        <input
          onChange={(e) => this.handleChange(e, key)}
          type='text'
          name='image'
          value={fish.image}
          placeholder='Fish Name'
        />
        <br />
        <button onClick={this.props.removeFish}>Remove Fish</button>
        <br />
      </div>
    );
  }
  render() {
    return (
      <div>
        <h1>Inventory</h1>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
