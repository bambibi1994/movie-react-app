import React, { Component } from 'react';
import '../css/Movie.css';
import PropTypes from 'prop-types'; // be sure to include this!

const GENERIC_MOVIE_TITLE = "New Movie Title",
  GENERIC_MOVIE_BODY = "New Movie Body",
  GENERIC_MOVIE_YEAR = 0,
  GENERIC_MOVIE_GENRE = "New Movie Genre";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.titleContent = React.createRef();
    this.bodyContent = React.createRef();
    this.yearContent = React.createRef();
    this.genreContent = React.createRef();
    this.state = {
      title: GENERIC_MOVIE_TITLE,
      body: GENERIC_MOVIE_BODY,
      year: GENERIC_MOVIE_YEAR,
      genre: GENERIC_MOVIE_GENRE,
      editMode: false,
      watchMode: false
    }
  }

  handleEdit() {
    this.setState({
      editMode: true
    });
  }

  handleSave() {
    this.setState({
      title: this.titleContent.current.value,
      body: this.bodyContent.current.value,
      year: this.yearContent.current.value,
      genre: this.genreContent.current.value,
      editMode: false,
      watchMode: true
    });
  }

  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }

  handleWatch() {
    if (this.state.watchMode) {
      this.setState({
        watchMode: false
      });
    } else {
      this.setState({
        watchMode: true
      });
    }
  }

  render() {
    let titleElement, bodyElement, yearElement, genreElement, buttonArea;
    if (this.state.editMode) {
      titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
      bodyElement = <textarea ref={this.bodyContent} className="body-textarea" defaultValue={this.state.body}></textarea>;
      yearElement = <textarea ref={this.yearContent} className="year-textarea" defaultValue={this.state.year}></textarea>;
      genreElement = <textarea ref={this.genreContent} className="genre-textarea" defaultValue={this.state.genre}></textarea>;
      buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
    } else {
      titleElement = <h5 className="card-title">{this.state.title}</h5>;
      bodyElement = <p>{this.state.body}</p>;
      yearElement = <p>{this.state.year}</p>;
      genreElement = <p>{this.state.genre}</p>;
      buttonArea = <div>
        <button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button>
        <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
        <button className="btn btn-success" onClick={this.handleWatch.bind(this)}>Watch</button>
      </div>;
    }
    return (
      <div className='col-sm-6'>
        <div className="card card-view">
          {this.state.watchMode === true &&
            < div className="card-body bg-green">
              {titleElement}
              {bodyElement}
              {yearElement}
              {genreElement}
              {buttonArea}
            </div>}
          {this.state.watchMode === false &&
            < div className="card-body bg-red">
              {titleElement}
              {bodyElement}
              {yearElement}
              {genreElement}
              {buttonArea}
            </div>}
        </div>
      </div >
    );

  }
  // constructor() {
  //   super();
  // }

  // render() {
  //   return (
  //     <div className="col-sm-6">
  //       <div className="card card-view">
  //         <div className="card-body">
  //           <h5 className="card-title">{this.props.title}</h5>
  //           <p>{this.props.description}</p>
  //           <p>{this.props.year} | {this.props.genre}</p>
  //           <button className="btn btn-info">Edit</button>
  //           <button className="btn btn-danger">Delete</button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

}

Movie.defaultProps = {
  title: "A cool title",
  // description: "A cool description",
  body: "A cool Body",
  year: 0,
  genre: "A cool genre"
};

Movie.propTypes = {
  title: PropTypes.string,
  // description: PropTypes.string,
  body: PropTypes.string,
  year: PropTypes.number,
  genre: PropTypes.string
};

export default Movie;