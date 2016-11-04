import React, { Component } from 'react';

import './navigation.scss';

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <ul className="navigation__links">
                    <li className="navigation__link">Link</li>
                    <li className="navigation__link">Link</li>
                </ul>
            </div>
        );
    }
}

export default Navigation;
