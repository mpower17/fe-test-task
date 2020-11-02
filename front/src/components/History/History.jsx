import React from 'react';
import styles from './History.module.css';

let History = (props) => {
    return (
        props.historyData ?
        <div className={styles.historyContainer}>
            <div>
                <h2>Number of wins</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">who</th>
                            <th scope="col">count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>AI</td>
                            <td>{props.historyData.ai}</td>
                        </tr>
                        <tr>
                            <td>Player</td>
                            <td>{props.historyData.player}</td>
                        </tr>
                        <tr>
                            <td>X</td>
                            <td>{props.historyData.X}</td>
                        </tr>
                        <tr>
                            <td>O</td>
                            <td>{props.historyData.O}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h2>Games history</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">winner</th>
                        <th scope="col">team</th>
                        <th scope="col">ts</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.historyData ? props.historyData.list.map(el =>
                        <tr>
                            <td>{el.winner}</td>
                            <td>{el.team}</td>
                            <td>{el.ts}</td>
                        </tr>
                    ) : console.log("Nothing :(")}
                    </tbody>
                </table>
            </div>

        </div> : <div>Nothing</div>
    )
}

export default History;
