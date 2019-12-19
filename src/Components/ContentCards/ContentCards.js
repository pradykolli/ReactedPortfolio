import React, { Component } from 'react';
import "./ContentCards.css";

class ContentCards extends Component {
    constructor(props) {
        super(props);
        this.cardTitle = props.cardTitle;
    }    
    render() {
        return (
            <div className="webDeveloperSection">
                <h1>{this.props.cardTitle}</h1>
                <p>
                    {this.props.children}
                </p>
            </div>
        );
    }
}

export default ContentCards;