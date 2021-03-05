import React, { Component } from "react";
import DogDataService from "../services/dog.service";

export default class Dog extends Component {
  constructor(props) {
    super(props);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.getDog = this.getDog.bind(this);
    this.updateDog = this.updateDog.bind(this);
    this.deleteDog = this.deleteDog.bind(this);

    this.state = {
      currentDog: {
        id: null,
        name: "",
        breed: "",
        price: 0
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getDog(this.props.match.params.id);
  }

  onChangePrice(e) {
    const price = parseInt(e.target.value);
    
    this.setState(prevState => ({
      currentDog: {
        ...prevState.currentDog,
        price: price
      }
    }));
  }

  getDog(id) {
    DogDataService.get(id)
      .then(response => {
        this.setState({
          currentDog: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateDog() {
    DogDataService.update(
      this.state.currentDog.id,
      this.state.currentDog
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The dog's data was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteDog() {    
    DogDataService.delete(this.state.currentDog.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/dogs')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentDog } = this.state;

    return (
      <div>
        {currentDog ? (
          <div className="edit-form">
            <h4>Dog</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  defaultValue={currentDog.name}
                  disabled
                />
              </div>
              <div className="form-group">
                <label htmlFor="breed">Breed</label>
                <input
                  type="text"
                  className="form-control"
                  id="breed"
                  defaultValue={currentDog.breed}
                  disabled
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  value={currentDog.price}
                  onChange={this.onChangePrice}
                />
              </div>

            </form>
            <h3>
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteDog}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateDog}
            >
              Update
            </button>
            </h3>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Dog...</p>
          </div>
        )}
      </div>
    );
  }
}