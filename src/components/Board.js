import React, { Component } from 'react';
import '../css/Board.css';
import Movie from './Movie';

class Board extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row">
                        <Movie title="John Wick"
                            description="Man revenge for lost of his dog."
                            year="2014" genre="Action" />
                        <Movie title="Detective Dee and the Mystery of the Phantom Flame"
                            description="Follow Tang Official solve mysterious dead of royal,and other official."
                            year="2010" genre="Detective/ Mystery" />
                        <Movie title="Spirited Away"
                            description="A journey of Chihiro grown up in spirit land."
                            year="2001" genre="Adventure/ Animation" />
                    </div>
                </div>
                <div>
                    <button className="btn btn-success add-button">Add</button>
                </div>
            </div>
        );
    }
}

export default Board;