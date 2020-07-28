import React, { Component } from "react";

class Order extends Component {
  constructor() {
    super();

    this.renderOrder = this.renderOrder.bind(this);
  }
  renderOrder(key) {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];

    if (!fish || fish.status === "unavailable") {
      return (
        <li key={key}>
          Sorry, {fish ? fish.name : "fish"} is no Longer Available
        </li>
      );
    }
    return (
      <li key={key}>
        <span style={{ padding: 12 }}>
          {count} lbs {fish.name}
        </span>
        <span className='price'>${count * fish.price}</span>
      </li>
    );
  }
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + (count * fish.price || 0);
      }
      return prevTotal;
    }, 0);
    return (
      <div>
        <h2>Your Order</h2>
        <ul>{orderIds.map(this.renderOrder)}</ul>
        {/* <p>
          FishName:
          <br />
          {orderIds}
        </p> */}
        <hr />
        <h4>Total = ${total}/-</h4>
      </div>
    );
  }
}

export default Order;
