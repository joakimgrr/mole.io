import React, { Component } from 'react';

<<<<<<< HEAD
import Image from 'components/Image/Image';

=======
>>>>>>> master
class Project extends Component {

    render() {
        return (
            <div className="project-view">
<<<<<<< HEAD
                <div className="project-view__header">
                    <h2>Project {this.props.params.projectId}</h2>
                </div>

                <div className="project__images">
                    <Image></Image>
                </div>
=======
                <h2>Project {this.props.params.projectId}</h2>
>>>>>>> master
            </div>
        );
    }
}

export default Project;
