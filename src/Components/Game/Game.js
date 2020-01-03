import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import './Game.css'
import GridBox from './GridBox'



class Game extends Component{
    constructor(props) {
        super(props);
        this.state = {
            generatedNumbers : []
        };
        this.generateNumber = this.generateNumber.bind(this);
    } 
    generateNumber(){
        this.setState({
            generatedNumbers: [...this.state.generatedNumbers, Math.round(Math.random() * 10)]
        })
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
                        {this.state.generatedNumbers}
                        {console.log(this.state.generatedNumbers)}
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