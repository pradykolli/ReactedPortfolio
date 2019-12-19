import React, { Component } from 'react';
import "./ContentCards.css";

class ContentCards extends Component {
    props = {
        cardTitle : "",
        cardContent : ""
    }
    
    render() {
        return (
            <div className="webDeveloperSection">
                <h1>{this.props.cardTitle}</h1>
                <p>
                    {this.props.cardContent}
                </p>
            </div>
        );
    }
}

export default ContentCards;