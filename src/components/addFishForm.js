import React, { Component } from "react";

class AddFishForm extends Component {
  constructor() {
    super();
    this.createFish = this.createFish.bind(this);
  }
  createFish(event) {
    event.preventDefault();
    console.log("Gonna make some Fish");

    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
    };
    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render() {
    return (
      <div>
        <form
          ref={(input) => (this.fishForm = input)}
          onSubmit={(e) => this.createFish(e)}
        >
          <input
            ref={(input) => (this.name = input)}
            type='text'
            placeholder='Fish Name'
          />
          <input
            ref={(input) => (this.price = input)}
            type='text'
            placeholder='Fish Price'
          />
          <select ref={(input) => (this.status = input)}>
            <option value='avaliable'>Fresh !</option>
            <option value='unavaliable'>Sold Out! </option>
          </select>

          <textarea
            ref={(input) => (this.desc = input)}
            placeholder='Fish Desc'
          ></textarea>
          <input
            ref={(input) => (this.image = input)}
            type='text'
            placeholder='Fish Image'
          />
          <button className='primary' type='submit'>
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default AddFishForm;
