import React from 'react';
import {connect} from "react-redux";
import History from "./History";
import {fetchHistory} from "../../redux/actions/actionCreators/fetchHistory/fetchHistory";
import {resetHistory} from "../../redux/actions/actionCreators/resetHistory/resetHistory";

class HistoryContainer extends React.Component {
    componentDidMount() {
        this.props.fetchHistory();
    }

    render() {
        return (
            <History historyData={this.props.historyData} resetHistory={this.props.resetHistory}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        historyData: state.historyPage.historyData
    }
}

export default connect(mapStateToProps, {
    fetchHistory,
    resetHistory
})(HistoryContainer);
