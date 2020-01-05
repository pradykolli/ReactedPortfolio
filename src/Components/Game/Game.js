import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import './Game.css'
// import GridBox from './GridBox'



class Game extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            startGame : false,
            generatedNumbers : [],
            generatedDivs : [],
            gridDivs: [<div className="gridBox">
                            <span>"Let's Play"</span>
                        </div>],
            gridNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].sort(() => Math.random() - 0.5)
        };
        this.generateNumber = this.generateNumber.bind(this);
        this.generateGrids = this.generateGrids.bind(this);
    } 
    generateGrids(){
        var grids = []
        for (var j = 0; j < this.state.gridNumbers.length; j++) {
            grids.push( 
            <div className="gridBox" key={j} id={this.state.gridNumbers[j]}>
                <span>{this.state.gridNumbers[j]}</span>
            </div>
            );
        }
        this.setState({
            gridDivs : grids,
            startGame : true
        })
        return grids
    }
    generateNumber(){
        if(this.state.count <= 15){
            let randomNumber = Math.floor((Math.random() * 25) + 1);
            for(let i=0; i<this.state.generatedNumbers.length; i++){
                if(this.state.generatedNumbers.includes(randomNumber)){
                    randomNumber = Math.floor((Math.random() * 25) + 1)
                }
                else{
                    continue
                }
            }
            this.setState({
                generatedNumbers: [...this.state.generatedNumbers, randomNumber]
            })
            this.setState({
                generatedDivs : [...this.state.generatedDivs, <div className="generatedStack" key={this.state.count}>{this.state.generatedNumbers.slice(this.state.count-1, this.state.count+1)}</div>]
            })
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.generatedNumbers)
            
        }
        else{
            alert("Sorry!! You have lost the game. ");
        }

    } 
    render(){
        let buttonelement
        if(!this.state.startGame){
            buttonelement = <Col md="12" className="text-center mt10">
                <button className="btn btn-success" type="button"color="success" onClick={this.generateGrids}>Let's Get Started Shall We?</button>
            </Col>
        }
        else{
            buttonelement = <Col md="12" className="text-center mt10">
            <button className="btn btn-success" type="button"color="success" onClick={this.generateNumber}>Generate Number</button>
        </Col>
        }
        return (
            <div>
                {/* <h1>Page under construction</h1>
                <Progress animated color="success" value="35" /> */}
                <h1>Lets play some Bingo!</h1>
                <Row>
                    {buttonelement}
                    <Col md="12" className="generatedBoxLayout">
                        {this.state.generatedDivs}
                    </Col>
                    <Col md="12" className="mt10">
                        <div className="boxLayout">
                            {/* <GridBox gridSize="25"></GridBox> */}
                            {this.state.gridDivs}
                            
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Game