import React, { Component } from "react";

class Fish extends Component {
  render() {
    const { index } = this.props;
    const isAvailable = this.props.details.status === "available";

    return (
      <div className='fishComp'>
        <h3>{this.props.details.name}</h3>
        <hr />
        <img
          src={this.props.details.image}
          alt={this.props.details.names}
          height='100'
          width='100'
        />
        <p>Price: ${this.props.details.price}</p>
        <p>Status: {this.props.details.status}</p>
        <p>Description: {this.props.details.desc}</p>
        <button onClick={() => this.props.addToOrder(index)}>
          {isAvailable ? "Add to Order" : "Sold Out"}
        </button>
      </div>
    );
  }
}

export default Fish;
