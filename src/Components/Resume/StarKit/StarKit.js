import React, { Component } from 'react';
import './StarKit.css'

class StarKit extends Component{
    constructor(props){
        super(props)
        this.number = props.number
    }
    addStars() {
        var stars = [];
        for (var i = 0; i < this.props.number; i++) {
            stars.push(<span className='stars' key={i}></span>);
        }
        return stars
    }
    
    render(){ 
        return (
            this.addStars()
        );
    }
    
}

export default StarKit;