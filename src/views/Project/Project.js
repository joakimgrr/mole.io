import React, { Component } from 'react';

import Image from 'components/Image/Image';
import StatusIndicator from 'components/StatusIndicator/StatusIndicator';

import './project.scss';

class Project extends Component {

    render() {
        return (
            <div className="project-view">
                <div className="project-view__header">
                    <div className="project-view__title-wrapper">
                        <h2>Project {this.props.params.projectId}</h2>
                    </div>
                    <div className="project-view__status-wrapper">
                        <StatusIndicator status={'passed'}></StatusIndicator>
                    </div>
                </div>

                <div className="project__images">
                    <Image></Image>
                </div>
            </div>
        );
    }
}

export default Project;
