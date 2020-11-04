import React from 'react';
import {Button, Table} from "react-bootstrap";

let Log = (props) => {
    return (
        <div>
            <div>
                <h2>History moves</h2>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th scope="col">who</th>
                            <th scope="col">index</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.log.map(el =>
                        <tr key={Math.random()}>
                            <td>{el.who}</td>
                            <td>{el.index}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Log;
