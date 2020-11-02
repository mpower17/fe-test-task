import React from 'react';
import styles from './Game.module.css'
import GameModalContainer from "../GameModal/GameModalContainer";

let Game = (props) => {

    return (
        <div>
            {props.end ? <GameModalContainer winner={props.winner} newGame={props.newGame} end={props.end} /> : null }
            <div className={styles.game}>
                <div className={styles.gameBoard}>
                    {
                        props.board ? [].concat(props.board[0], props.board[1], props.board[2]).map(el => {
                            if (el === "X") {
                                return <div className={styles.cell + " " + styles.cellX}/>;
                            } else if (el === "O"){
                                return <div className={styles.cell + " " + styles.cellO}/>;
                            } else {
                                return <div className={styles.cell} onClick={() => {props.makeMove(el)}}/>;
                            }
                        }) : console.log("nothing :(")
                    }
                </div>

                <div className={styles.gameMenu}>
                    <button className="btn btn-outline-primary" onClick={() => {props.newGame()}}>New game</button>
                    <button className="btn btn-outline-primary" onClick={() => {props.resetGame()}}>Reset game</button>
                </div>
            </div>
        </div>
    )
}

export default Game;
