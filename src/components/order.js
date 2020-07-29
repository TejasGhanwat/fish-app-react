import React, { Component } from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

class Order extends Component {
  constructor() {
    super();

    this.renderOrder = this.renderOrder.bind(this);
  }
  renderOrder(key) {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const removeButton = (
      <button onClick={() => this.props.removeFromOrder(key)}>X</button>
    );

    if (!fish || fish.status === "unavailable") {
      return (
        <li key={key}>
          Sorry, {fish ? fish.name : "fish"} is no Longer Available{" "}
          {removeButton}
        </li>
      );
    }
    return (
      <li key={key}>
        <span>
          <CSSTransitionGroup
            component='span'
            className='count'
            transitionName='count'
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}
          >
            <span key={count}>{count} </span>
          </CSSTransitionGroup>
          lbs {fish.name}
          {removeButton}
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
        <CSSTransitionGroup
          className='order'
          component='ul'
          transitionName='order'
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {orderIds.map(this.renderOrder)}
        </CSSTransitionGroup>
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
