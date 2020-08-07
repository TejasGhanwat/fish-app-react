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
      <div className='addFishForm'>
        <h6>Add Fish Form</h6>
        <form
          className='formItems'
          ref={(input) => (this.fishForm = input)}
          onSubmit={(e) => this.createFish(e)}
        >
          <input
            className='inputElems'
            ref={(input) => (this.name = input)}
            type='text'
            placeholder='Fish Name'
          />
          <br />
          <input
            className='inputElems'
            ref={(input) => (this.price = input)}
            type='text'
            placeholder='Fish Price'
          />
          <br />
          <select className='inputElems' ref={(input) => (this.status = input)}>
            <option value='available'>Fresh !</option>
            <option value='unavailable'>Sold Out! </option>
          </select>
          <br />

          <textarea
            className='inputElems'
            ref={(input) => (this.desc = input)}
            placeholder='Fish Desc'
          ></textarea>
          <br />
          <input
            className='inputElems'
            ref={(input) => (this.image = input)}
            type='text'
            placeholder='Fish Image'
          />
          <br />
          <button className='primary' type='submit'>
            Add Item
          </button>
          <br />
        </form>
      </div>
    );
  }
}

export default AddFishForm;
