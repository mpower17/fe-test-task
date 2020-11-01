import React from 'react';
import styles from './History.module.css';

let History = (props) => {
    debugger
    return (
        props.historyData ?
        <div>
            <div>
                <span>Количество побед</span>
                <br/>
                <span>{"ai " + props.historyData.ai}</span>
                <br/>
                <span>{"player " + props.historyData.player}</span>
                <br/>
                <span>{"X " + props.historyData.X}</span>
                <br/>
                <span>{"O " + props.historyData.O}</span>
            </div>
            <table>
                <tr>
                    <th>winner</th>
                    <th>team</th>
                    <th>ts</th>
                </tr>
                {props.historyData ? props.historyData.list.map(el =>
                    <tr>
                        <th>{el.winner}</th>
                        <th>{el.team}</th>
                        <th>{el.ts}</th>
                    </tr>
                ) : console.log("Nothing :(")}
            </table>
        </div> : <div>Nothing</div>
    )
}

export default History;
