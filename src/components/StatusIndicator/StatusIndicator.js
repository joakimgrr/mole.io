import React from 'react';

import './statusIndicator.scss';

const StatusIndicator = ({status}) => (
    <div className={'status-indicator status-indicator--' + status}>
        <span className="status-indicator__statustext">{status}</span>
    </div>
)

StatusIndicator.PropTypes = {
    status: React.PropTypes.string.isRequired
}

export default StatusIndicator;
