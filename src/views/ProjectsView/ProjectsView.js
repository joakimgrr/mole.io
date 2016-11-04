import React, { Component } from 'react';

import './projectsView.scss';

import ProjectList from 'containers/ProjectList/ProjectList';

class ProjectsView extends Component {

    constructor(props) {
        super(props);

        this.devProjects = [
            {
                name: 'Project Alpha',
                description: 'Project about alpha particles',
                status: 'passed'
            },
            {
                name: 'Project XYZ',
                description: 'Testing suite',
                status: 'failed'
            }
        ]
    }

    render() {
        return (
            <div className="projects-view">
                <h2>Projects view</h2>
                <ProjectList projects={this.devProjects}/>
            </div>
        );
    }
}

export default ProjectsView;
