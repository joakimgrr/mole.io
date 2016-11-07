import React, { Component } from 'react';

import './statusIndicator.scss';

class StatusIndicator extends Component {
    render() {
        return (
            <div className={'status-indicator status-indicator--' + this.props.status}>
                <span className="status-indicator__statustext">{this.props.status}</span>
            </div>
        )
    }
}

StatusIndicator.PropTypes = {
    status: React.PropTypes.string.isRequired
}

export default StatusIndicator;
