import React, { Component } from "react";
import DogDataService from "../services/dog.service";

export default class AddDog extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeBreed = this.onChangeBreed.bind(this);
    this.saveDog = this.saveDog.bind(this);
    this.newDog = this.newDog.bind(this);

    this.state = {
      id: null,
      name: "",
      breed: "",
      price: 0, 
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: parseInt(e.target.value)
    });
  }

  onChangeBreed(e) {
    this.setState({
      breed: e.target.value
    });
  }

  saveDog() {
    var data = {
      name: this.state.name,
      breed: this.state.breed,
      price: this.state.price
    };

    DogDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          breed: response.data.breed,
          price: response.data.price,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newDog() {
    this.setState({
      id: null,
      name: "",
      breed: "",
      price: 0,
      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newDog}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={this.state.name}
                  onChange={this.onChangeName}
                  name="name"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="breed">Breed</label>
                <input
                  type="text"
                  className="form-control"
                  id="breed"
                  required
                  value={this.state.breed}
                  onChange={this.onChangeBreed}
                  name="breed"
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  required
                  value={this.state.price}
                  onChange={this.onChangePrice}
                  name="price"
                />
              </div>
  
              <button onClick={this.saveDog} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}