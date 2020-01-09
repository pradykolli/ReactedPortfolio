import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import './Game.css'
// import GridBox from './GridBox'



class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            match: 0,
            startGame: false,
            generatedNumbers: [],
            generatedDivs: [],
            selectedNumbers: [],
            gridDivs: [<div className="gridBox" key="letsplay">
                <span>"Let's Play"</span>
            </div>],
            gridNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].sort(() => Math.random() - 0.5)
        };
        this.generateNumber = this.generateNumber.bind(this);
        this.generateGrids = this.generateGrids.bind(this);
        this.onNumberClick = this.onNumberClick.bind(this);
        this.bingo = this.bingo.bind(this);

    }
    bingo = () => {
        console.log(this.state.selectedNumbers)
        for(var i = 0; i < this.state.selectedNumbers.length; i++ ){
            for(var j = 0; j < this.state.generatedNumbers.length; j++){
                console.log(this.state.selectedNumbers[i] , this.state.generatedNumbers[j], this.state.match)
                if(this.state.selectedNumbers[i] === this.state.generatedNumbers[j]){
                    this.setState(prevState => ({
                        match : prevState.match + 1
                    }))
                }
            }
        }
        if(this.state.match === 5){
            alert("BINGO!! Congratulations you have won the game.")
        }
        else{
            alert("Better luck next time")
        }
    } 
    onNumberClick = clickedNumber => {
        this.setState((prevState)=>({
            selectedNumbers : [...prevState.selectedNumbers,clickedNumber]
        }))
        // console.log(clickedNumber, this.state.selectedNumbers)
        if(this.state.selectedNumbers.length === 5){
            this.bingo()
        }
    }
    generateGrids() {
        var grids = []
        grids = this.state.gridNumbers.map(gridNumber =>
            <div className="gridBox" key={gridNumber} id={gridNumber}>
                <button className="gridNumberBtn" onClick={() => this.onNumberClick(gridNumber)}>
                    {gridNumber}
                </button>
            </div>
        )
        this.setState({
            gridDivs: grids,
            startGame: true
        })
        return grids
    }
    generateNumber() {
        if (this.state.count <= 15) {
            let randomNumber = Math.floor((Math.random() * 25) + 1);
            for (let i = 0; i < this.state.generatedNumbers.length; i++) {
                if (this.state.generatedNumbers.includes(randomNumber)) {
                    randomNumber = Math.floor((Math.random() * 50) + 1)
                }
                else {
                    continue
                }
            }
            this.setState({
                generatedNumbers: [...this.state.generatedNumbers, randomNumber]
            })
            this.setState({
                generatedDivs: [...this.state.generatedDivs, <div className="generatedStack" key={this.state.count}>{this.state.generatedNumbers.slice(this.state.count - 1, this.state.count + 1)}</div>]
            })
            this.setState({
                count: this.state.count + 1
            })
            // console.log(this.state.generatedNumbers)

        }
        else {
            alert("Sorry!! You have lost the game. ");
        }

    }
    render() {
        let buttonelement
        if (!this.state.startGame) {
            buttonelement = <Col md="12" className="text-center mt10">
                <button className="btn btn-success" type="button" color="success" onClick={this.generateGrids}>Let's Get Started Shall We?</button>
            </Col>
        }
        else {
            buttonelement = <Col md="12" className="text-center mt10">
                <button className="btn btn-success" type="button" color="success" onClick={this.generateNumber}>Generate Number</button>
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