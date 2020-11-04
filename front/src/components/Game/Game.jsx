import React from 'react';
import styles from './Game.module.css'
import GameModalContainer from "../GameModal/GameModalContainer";
import {Button} from "react-bootstrap";
import Log from "../Log/Log";

let Game = (props) => {
    return (
        <div>
            {props.end ? <GameModalContainer winner={props.winner} newGame={props.newGame} end={props.end} /> : null }
            <div className={styles.game}>
                <div className={styles.gameBoard}>
                    {
                        props.board ? [].concat(props.board[0], props.board[1], props.board[2]).map(el => {
                            if (el === "X") {
                                return <div className={styles.cell + " " + styles.cellX} key={Math.random()}/>;
                            } else if (el === "O"){
                                return <div className={styles.cell + " " + styles.cellO} key={Math.random()}/>;
                            } else {
                                return <div className={styles.cell} onClick={() => {
                                    if (!props.end) {
                                        props.makeMove(el);
                                        props.updateLog("player", el);
                                    }
                                }} key={Math.random()}/>;
                            }
                        }) : null
                    }
                </div>

                <Log log={props.log} />

                <div className={styles.gameMenu}>
                    <Button variant="outline-primary" onClick={() => {props.newGame()}}>New game</Button>
                    <Button variant="outline-primary" onClick={() => {props.resetGame()}}>Reset game</Button>
                </div>
            </div>
        </div>
    )
}

export default Game;
