import React from 'react';
import {connect} from "react-redux";
import {GameModal} from "./GameModal";
import {toggleModal} from "../../redux/actions/actionCreators/toggleModal/toggleModal";

class GameModalContainer extends React.Component {
    componentDidMount() {
        if (this.props.end) {
            this.props.toggleModal(true);
        }
    }

    render() {
        return (
            <GameModal toggleModal={this.props.toggleModal} toggled={this.props.toggled} winner={this.props.winner} newGame={this.props.newGame} end={this.props.end} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        toggled: state.modal.toggled
    }
}

export default connect(mapStateToProps, {
    toggleModal
})(GameModalContainer);
