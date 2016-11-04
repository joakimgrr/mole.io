import React, { Component } from 'react';

import Navigation from 'components/Navigation/Navigation';
import ProjectsView from 'views/ProjectsView/ProjectsView';

import './app.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <div className="container">
                    <ProjectsView />
                </div>
            </div>
        );
    }
}

export default App;
