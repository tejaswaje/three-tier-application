import React, { Component } from "react";
import DogDataService from "../services/dog.service";
import { Link } from "react-router-dom";

export default class DogsList extends Component {
  constructor(props) {
    super(props);
    this.retrieveDogs = this.retrieveDogs.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveDog = this.setActiveDog.bind(this);

    this.state = {
      dogs: [],
      currentDog: null,
      currentIndex: -1
    };
  }

  componentDidMount() {
    this.retrieveDogs();
  }

  retrieveDogs() {
    DogDataService.getAll()
      .then(response => {
        this.setState({
          dogs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveDogs();
    this.setState({
      currentDog: null,
      currentIndex: -1
    });
  }

  setActiveDog(dog, index) {
    this.setState({
      currentDog: dog,
      currentIndex: index
    });
  }

  render() {
    const { dogs, currentDog, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Dogs List</h4>

          <ul className="list-group">
            {dogs &&
              dogs.map((dog, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveDog(dog, index)}
                  key={index}
                >
                  {dog.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentDog ? (
            <div>
              <h4>Dog</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentDog.name}
              </div>
              <div>
                <label>
                  <strong>Breed:</strong>
                </label>{" "}
                {currentDog.breed}
              </div>
              <div>
                <label>
                  <strong>Price:</strong>
                </label>{" $"}
                {currentDog.price}
              </div>
              <h3>
              <Link
                to={"/dogs/" + currentDog.id}
                className="badge badge-warning"
              >
                Edit / Delete
              </Link>
              </h3>
            </div>
          ) : (
            <div>
              <br />
              {(dogs.length === 0) ? (<p>Please add Dog by clicking the add button</p>) : <p>Please click on any Dog to view details</p>}
              
            </div>
          )}
        </div>
      </div>
    );
  }
}