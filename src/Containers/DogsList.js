import React, { Component } from "react";
import {apiResponse} from '../api.js'
import DogCard from '../Components/DogCard.js'


class DogsList extends Component {
  dogCards = apiResponse.map(dog => <DogCard name={dog.name} img={dog.img} key={dog.id}/>)
  render() {
    console.log(this.dogCards)
    return <div className="list">{this.dogCards}</div>;
  }
}

export default DogsList;
