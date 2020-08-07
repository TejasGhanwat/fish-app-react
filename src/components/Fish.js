import React, { Component } from "react";

class Fish extends Component {
  render() {
    const { index } = this.props;
    const isAvailable = this.props.details.status === "available";
    let buttonColor = "";
    isAvailable ? (buttonColor = "#3d8aa8") : (buttonColor = "#f26161");

    return (
      <div className='fishComp'>
        <div className='fishImage'>
          <img
            src={this.props.details.image}
            alt={this.props.details.names}
            height='100'
            width='120'
          />
          <h3>{this.props.details.name}</h3>
        </div>
        <div className='fishDetails'>
          <div className='fishprice'>
            <p>Price: ${this.props.details.price}</p>
            <p style={{ float: "right", paddingLeft: 20 }}>
              Status: {this.props.details.status}
            </p>
          </div>

          <p>Description: {this.props.details.desc}</p>

          <button
            style={{ backgroundColor: buttonColor }}
            onClick={() => this.props.addToOrder(index)}
          >
            {isAvailable ? "Add to Order" : "Sold Out"}
          </button>
        </div>
      </div>
    );
  }
}

export default Fish;
