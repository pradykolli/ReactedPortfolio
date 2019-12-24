import React, { Component } from 'react';
import './Game.css'

class GridBox extends Component{
    constructor(props){
        super(props)
        this.gridSize = props.gridSize
    }
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    addGrids() {
        var grids = [];
        var gridNumbers = [];
        for(var i = 1; i <= 25; i++){
            gridNumbers.push(i)
        }
        this.shuffle(gridNumbers)
        console.log(gridNumbers)
        for (var j = 0; j < this.props.gridSize; j++) {
            grids.push( 
            <div className="gridBox" key={j} id={gridNumbers[j]}>
                <span>{gridNumbers[j]}</span>
            </div>
            );
        }
        return grids
    }
    
    render(){ 
        return (
            this.addGrids()
        );
    }
    
}

export default GridBox;