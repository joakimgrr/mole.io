import React, { Component } from 'react';

import './projectRow.scss';

class ProjectRow extends Component {
    render() {
        return (
            <div className="project-row">
                <div className="project-row__info">
                    <h3>{this.props.project.name}</h3>
                    <span>{this.props.project.description}</span>
                </div>
                <div className={'project-row__status project-row__status--' + this.props.project.status}>
                    <span className="project-row__statustext">{this.props.project.status}</span>
                </div>
            </div>
        );
    }
}

ProjectRow.propTypes = {
    project: React.PropTypes.object
}

export default ProjectRow;
