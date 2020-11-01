import React from 'react';
import Game from "./Game";
import {connect} from "react-redux";
import {fetchBoard} from "../../redux/actions/actionCreators/fetchBoard/fetchBoard";
import {makeMove} from "../../redux/actions/actionCreators/makeMove/makeMove";
import {newGame} from "../../redux/actions/actionCreators/newGame/newGame";

class GameContainer extends React.Component {
    componentDidMount() {
        this.props.fetchBoard();
    }

    render() {
        return (
            <Game makeMove={this.props.makeMove} newGame={this.props.newGame} board={this.props.board}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        field: state.gamePage.field,
        board: state.gamePage.board
    }
}

export default connect(mapStateToProps, {
    fetchBoard,
    makeMove,
    newGame
})(GameContainer);
