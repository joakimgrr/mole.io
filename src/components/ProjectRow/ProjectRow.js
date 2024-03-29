import React, { Component } from 'react';
import { Link } from 'react-router';

import StatusIndicator from 'components/StatusIndicator/StatusIndicator';

import './projectRow.scss';

class ProjectRow extends Component {
    render() {
        return (
            <Link to={'/projects/' + this.props.project.id}>
                <div className="project-row">
                    <div className="project-row__info">
                        <h3 className="project-row__name">{this.props.project.name}</h3>
                        <span>{this.props.project.description}</span>
                    </div>
                    <div className="project-row__status-wrapper">
                        <StatusIndicator status={this.props.project.status}></StatusIndicator>
                    </div>
                </div>
            </Link>
        );
    }
}

ProjectRow.propTypes = {
    project: React.PropTypes.object
}

export default ProjectRow;
