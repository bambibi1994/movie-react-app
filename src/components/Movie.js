import React, {Component} from 'react';
import '../css/Movie.css';
import PropTypes from 'prop-types'; // be sure to include this!

class Movie extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.description}</p>
            <p>{this.props.year} | {this.props.genre}</p>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

Movie.defaultProps = {
  title: "A cool title",
  description: "A cool description",
  year: 0,
  genre: "A cool genre"
};

Movie.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.number,
  genre: PropTypes.string
};

export default Movie;