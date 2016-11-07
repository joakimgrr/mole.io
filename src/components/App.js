import React, { Component } from 'react';

import Navigation from 'components/Navigation/Navigation';

import './app.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
