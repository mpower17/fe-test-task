import React from 'react';
import {connect} from "react-redux";
import History from "./History";

class HistoryContainer extends React.Component {
    componentDidMount() {
        // this.props.fetchHistory();
    }

    render() {
        return (
            <History />
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {

})(HistoryContainer);
