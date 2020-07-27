import React, { Component } from "react";

class Fish extends Component {
  render() {
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
        <p>Price: {this.props.details.price}</p>
        <p>Status: {this.props.details.status}</p>
        <p>Description: {this.props.details.desc}</p>
        <button>Add to Order</button>
      </div>
    );
  }
}

export default Fish;
