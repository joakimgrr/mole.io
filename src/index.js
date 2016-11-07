import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'components/App';
import Navigation from 'components/Navigation/Navigation';
import ProjectsView from 'views/ProjectsView/ProjectsView';
import Project from 'views/Project/Project';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={ProjectsView}/>

            <Route path="/projects" component={ProjectsView}></Route>
            <Route path="/projects/:projectId" component={Project}></Route>
        </Route>
    </Router>,
    document.getElementById('root')
);
