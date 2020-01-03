import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import './Game.css'
import GridBox from './GridBox'



class Game extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            generatedNumbers : [],
            generatedDivs : []
        };
        this.generateNumber = this.generateNumber.bind(this);
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
            alert("Yo game's done Yo!");
        }

    } 
    render(){
        return (
            <div>
                {/* <h1>Page under construction</h1>
                <Progress animated color="success" value="35" /> */}
                <h1>Lets play some Bingo!</h1>
                <Row>
                    <Col md="12" className="text-center mt10">
                        <button type="button"color="success" onClick={this.generateNumber}>Generate Number</button>
                    </Col>
                    <Col md="12">
                        {this.state.generatedDivs}
                    </Col>
                    <Col md="12" className="mt10">
                        <div className="boxLayout">
                            <GridBox gridSize="25"></GridBox>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Game