import React, { Component } from 'react';

class Project extends Component {

    render() {
        return (
            <div className="project-view">
                <h2>Project {this.props.params.projectId}</h2>
            </div>
        );
    }
}

export default Project;
