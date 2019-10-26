import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg" 
                    alt="man" 
                    name="Scott"
                    min
                    />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post_decrip">
                    Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text.
                </div>
            </div>
        )
    }
}