import React, { Component } from 'react';

import Image from 'components/Image/Image';

class Project extends Component {

    render() {
        return (
            <div className="project-view">
                <div className="project-view__header">
                    <h2>Project {this.props.params.projectId}</h2>
                </div>

                <div className="project__images">
                    <Image></Image>
                </div>
            </div>
        );
    }
}

export default Project;
