import React, { Component } from "react";
import PropTypes from "prop-types";

class StorePicker extends Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }
  goToStore = (event) => {
    event.preventDefault();
    const storeId = this.storeInput.value;
    console.log("we are goin to", { storeId });
    this.props.history.push(`store/${storeId}`);

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

StorePicker.contextTypes = {
  router: PropTypes.object,
};

export default StorePicker;
