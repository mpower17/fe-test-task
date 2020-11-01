import React from 'react';
import {connect} from "react-redux";
import History from "./History";
import {fetchHistory} from "../../redux/actions/actionCreators/fetchHistory/fetchHistory";

class HistoryContainer extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchHistory();
    }

    render() {
        return (
            <History historyData={this.props.historyData} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        historyData: state.historyPage.historyData
    }
}

export default connect(mapStateToProps, {
    fetchHistory
})(HistoryContainer);
