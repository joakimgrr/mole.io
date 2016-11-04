import React, { Component } from 'react';

import ProjectRow from 'components/ProjectRow/ProjectRow';

class ProjectList extends Component {
    render() {
        return (
            <div className="project-list">
                {this.props.projects.map((data, i) => {
                    return (<ProjectRow project={data}/>)
                })}
            </div>
        );
    }
}

ProjectList.defaultProps = {
    projects: []
}

ProjectList.propTypes = {
    projects: React.PropTypes.array
}

export default ProjectList;
