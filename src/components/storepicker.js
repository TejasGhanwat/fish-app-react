import React, { Component } from "react";

class StorePicker extends Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }
  goToStore = (event) => {
    event.preventDefault();
    console.log("You changed URL");
    console.log(this.storeInput);

    //first grab the text from the box
    //second we are going to transition to store
  };
  render() {
    return (
      <div>
        <form onSubmit={this.goToStore}>
          <input
            type='text'
            required
            placeholder='Store_Name'
            defaultValue='MyStore'
            ref={(input) => (this.storeInput = input)}
          />
          <button type='submit'>Visit Store</button>
        </form>
      </div>
    );
  }
}

export default StorePicker;
