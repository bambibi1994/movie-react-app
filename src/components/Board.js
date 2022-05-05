import React, { Component } from 'react';
import '../css/Board.css';
import Movie from './Movie';

class Board extends Component {
    constructor() {
        super();
        this.state = {
          movies: [
            //   {title: "John Wick",
            //    body: "Man revenge for lost of his dog.", 
            //    year: 2014, genre: "Action"},
            //    {title: "John Wick",
            //    body: "Man revenge for lost of his dog.", 
            //    year: 2014, genre: "Action"}
          ]
          
        }
      }
    
      addMovie() {
        this.state.movies.push(
          {
            id: Date.now()
          }
        );
        this.setState(
          {
            movies: this.state.movies
          }
        );
      }
    
      deleteMovie(id) {
        let newMovieArr = this.state.movies;
        newMovieArr.map((movie, index) => {
          if (id === movie.id) {
            newMovieArr.splice(index, 1);
          }
        });
        this.setState(
          {
            Movies: newMovieArr
          }
        );
      }
    
      render() {
        return (
          <div>
            <div className="div-board">
              <div className="row">
                {
                  this.state.movies.map(movie => {
                    return <Movie key={movie.id} id={movie.id} deleteHandler={this.deleteMovie.bind(this)} />
                  })
                }
              </div>
            </div>
            <div>
              <button className="btn btn-success add-button" onClick={this.addMovie.bind(this)}>Add</button>
            </div>
          </div>
        );
      }
    // constructor() {
    //     super();
    // }

    // render() {
    //     return (
    //         <div>
    //             <div className="div-board">
    //                 <div className="row">
    //                     <Movie title="John Wick"
    //                         description="Man revenge for lost of his dog."
    //                         year="2014" genre="Action" />
    //                     <Movie title="Detective Dee and the Mystery of the Phantom Flame"
    //                         description="Follow Tang Official solve mysterious dead of royal,and other official."
    //                         year="2010" genre="Detective/ Mystery" />
    //                     <Movie title="Spirited Away"
    //                         description="A journey of Chihiro grown up in spirit land."
    //                         year="2001" genre="Adventure/ Animation" />
    //                 </div>
    //             </div>
    //             <div>
    //                 <button className="btn btn-success add-button">Add</button>
    //             </div>
    //         </div>
    //     );
    // }
}

export default Board;