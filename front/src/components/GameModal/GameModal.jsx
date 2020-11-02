import React from 'react';
import {Button, Modal} from 'react-bootstrap';

export let GameModal = (props) => {

    return (
        <Modal show={props.toggled} >
            <Modal.Header>
                <Modal.Title>Game completed!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{
                props.winner ? <p>Winner is {props.winner}</p> : <p>It's a draw</p>
            }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {
                    props.toggleModal();
                    props.newGame();
                }} variant="primary">
                    New game
                </Button>
                <Button onClick={() => {
                    props.toggleModal();
                }} variant="secondary">
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
