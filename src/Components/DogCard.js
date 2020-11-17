import React, { Component } from "react";

class DogCard extends React.Component {
    constructor() {
      super()
      this.state = {hasBarked: ""}
    }
    
    clickHandler = (event) => {
      if (this.state.hasBarked === "") {
        this.setState({hasBarked: "BARK"})
      } else if (this.state.hasBarked === "BARK") {
        this.setState({hasBarked: ""})
      }
    }
  
    render() {
      return (
      <div className="card" key={this.props.id}>
        <span className="content">
          <h2 >{this.props.name}</h2>
          <img alt={this.props.name} src={this.props.img} />
        </span>
        <span className="bark">
          <button onClick={this.clickHandler}>Bark</button>
          <h2>{this.state.hasBarked}</h2>
        </span>
      </div>
    )
  }
}

export default DogCard;
