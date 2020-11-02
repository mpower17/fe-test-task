import React from 'react';
import Game from "./Game";
import {connect} from "react-redux";
import {fetchBoard} from "../../redux/actions/actionCreators/fetchBoard/fetchBoard";
import {makeMove} from "../../redux/actions/actionCreators/makeMove/makeMove";
import {newGame} from "../../redux/actions/actionCreators/newGame/newGame";
import {resetGame} from "../../redux/actions/actionCreators/resetGame/resetGame";
import {toggleModal} from "../../redux/actions/actionCreators/toggleModal/toggleModal";

class GameContainer extends React.Component {
    componentDidMount() {
        this.props.fetchBoard();
    }

    render() {
        return (
            <Game makeMove={this.props.makeMove}
                  newGame={this.props.newGame}
                  board={this.props.board}
                  resetGame={this.props.resetGame}
                  winner={this.props.winner}
                  end={this.props.end}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        field: state.gamePage.field,
        board: state.gamePage.board,
        winner: state.gamePage.winner,
        end: state.gamePage.end
    }
}

export default connect(mapStateToProps, {
    fetchBoard,
    makeMove,
    newGame,
    resetGame,
    toggleModal
})(GameContainer);
