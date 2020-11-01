import React from 'react';
import styles from './Game.module.css'

let Game = (props) => {
    return (
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

            <button>New game</button>
            <button>History</button>
        </div>
    )
}

export default Game;
