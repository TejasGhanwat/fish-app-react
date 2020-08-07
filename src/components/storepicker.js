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
      <div className='storepicker'>
        <div className='mystore'>
          <div>
            <h4 className='title'>Catch of The Day</h4>
            <form className='myForm' onSubmit={this.goToStore}>
              <input
                style={{ display: "None" }}
                type='text'
                required
                placeholder='Store_Name'
                defaultValue='MyStore'
                ref={(input) => (this.storeInput = input)}
              />
              <button className='visit' type='submit'>
                Visit Store
                <i style={{ marginLeft: 10 }} class='fa fa-arrow-right'></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

StorePicker.contextTypes = {
  router: PropTypes.object,
};

export default StorePicker;
