import React, { Component } from "react";
import AddFishForm from "./addFishForm";

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
      <div className='addToInventory' key={key}>
        <button onClick={() => this.props.removeFish(key)}>X</button>
        <input
          className='inputElems'
          type='text'
          value={fish.name}
          name='name'
          placeholder='Fish Name'
          onChange={(e) => this.handleChange(e, key)}
        />
        <br />
        <input
          className='inputElems'
          type='text'
          value={fish.price}
          name='price'
          placeholder='Fish Price'
          onChange={(e) => this.handleChange(e, key)}
        />
        <br />
        <select
          className='inputElems'
          value={fish.status}
          name='status'
          onChange={(e) => this.handleChange(e, key)}
        >
          <option value='available'>Fresh!</option>
          <option valule='unavailable'>Sold out!</option>
        </select>
        <br />
        <textarea
          className='inputElems'
          onChange={(e) => this.handleChange(e, key)}
          name='desc'
          value={fish.desc}
          placeholder='Fish Description'
        ></textarea>
        <br />
        <input
          className='inputElems'
          onChange={(e) => this.handleChange(e, key)}
          type='text'
          name='image'
          value={fish.image}
          placeholder='Fish Name'
        />
        <br />

        <br />
      </div>
    );
  }
  render() {
    return (
      <div>
        <h4>Inventory</h4>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <div style={{ display: "flex" }}>
          <div className='addFishForm'>
            <AddFishForm addFish={this.props.addFish} />
          </div>
          <div className='samples'>
            <button className='samplesButton' onClick={this.props.loadSamples}>
              Load Sample Fishes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Inventory;
