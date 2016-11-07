import React, { Component } from 'react';

import './image.scss';

class Image extends Component {
    render() {
        let style = {
            backgroundImage: 'url("https://placeholdit.imgix.net/~text?txtsize=33&txt=1280x800&w=1280&h=800")'
        }
        return (
            <div className="image" style={style}>

            </div>
        )
    }
}

export default Image;
